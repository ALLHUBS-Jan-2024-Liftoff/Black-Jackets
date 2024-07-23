import React, { useState } from "react";

const RegisterForm = ({ register }) => {
  const [name, setName] = useState("");
  const [date, setEmail] = useState();
  const [genre, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name != "" &&
      email != null &&
      password != ""
    ) {
      register(name, email, password);
      setName("");
      setEmail();
      setPassword("");
    }
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">
            Username
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Email
            <input
              type="email"
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
              type="text"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
