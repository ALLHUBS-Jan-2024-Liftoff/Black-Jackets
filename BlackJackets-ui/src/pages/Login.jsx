import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../pages/form.css";

function LoginForm({ setAuthenticated, setVenueId, setUser}) {
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
      const userObject = JSON.parse(response.data.User);
      console.log(`venue: ${JSON.stringify(userObject)}`);
      setVenueId(userObject.id);
      alert(response.data.message);
      navigate("/venue-dashboard");
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card bg-dark text-white col-md-3 offset-md-4 offset-md-3 center">
          <h2 className="text-center">Login</h2>
          <div className="card-body"></div>
          <form onSubmit={handleLogin}>
            <div className="form-group mb-2 center">
              <label className="form-label text-center">
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
            <div className="form-group mb-2 center">
              <label className="form-label text-center">
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
            <button type="submit" className="btn btn-primary center">
              Login
            </button>
          </form>
          {message /* && <p>{message}</p> */}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
