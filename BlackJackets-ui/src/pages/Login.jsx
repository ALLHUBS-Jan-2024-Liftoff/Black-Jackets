import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm({ setAuthenticated, setVenueId, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8090/user/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      setAuthenticated(true);
      setVenueId(Number(response.data.venue));
      setUser(response.data.username);
      alert(response.data.message);
      navigate("/venue-dashboard");
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">
            Email
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Password
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Login
        </button>
      </form>
      {message /* && <p>{message}</p> */}
    </div>
  );
}

export default LoginForm;
