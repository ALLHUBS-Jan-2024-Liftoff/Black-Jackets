import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../pages/form.css";

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
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card bg-dark text-white col-md-3 offset-md-4 offset-md-3 center">
        <h2 className="text-center">Register</h2>
        <div className="card-body"></div>
        <form onSubmit={handleRegister}>
          <div className="form-group mb-2 center">
            <label className="form-label text-center">
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
          <div className="form-group mb-2 center">
            <label className="form-label text-center">
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
          <div className="form-group mb-2 center">
            <label className="form-label text-center">
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
          <button type="submit" className="btn btn-primary center">
            Register
          </button>
        </form>
        {message /* && <p>{message}</p> */}
      </div>
    </div>
   </div>
  );
}

export default RegisterForm;
