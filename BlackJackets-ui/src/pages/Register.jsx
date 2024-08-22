import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterForm({ setAuthenticated, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8090/user/register",
        {
          email,
          password,
          fullName,
        },
        {
          withCredentials: true,
        }
      );
      setAuthenticated(true);
      alert(response.data.message);
      navigate("/add-venue");
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label className="form-label">
            Email
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Name
            <input
              type="text"
              className="form-control"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
        >
          Register
        </button>
      </form>
      {message /* && <p>{message}</p> */}
    </div>
  );
}

export default RegisterForm;
