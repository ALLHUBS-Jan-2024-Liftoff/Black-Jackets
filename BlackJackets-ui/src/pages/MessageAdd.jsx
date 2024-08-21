import React, { useState } from "react";
import { addMessage } from "../services/MessageService";
import { useNavigate } from "react-router-dom";

function Message({ venueId }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name != "" && email != "" && content != "") {
      const message = { name, email, content, venueId };
      addMessage(message);
      alert("Band Message Created");
      console.log(message);
      navigate("/guest-view/" + venueId);
    }
  };

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Message</h2>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <label className="form-label"> Name</label>
                <input
                  type="text"
                  placeholder="Enter Band Name"
                  name="name"
                  value={name}
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={email}
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Content</label>
                <textarea
                  type="textarea"
                  placeholder="Enter Content"
                  name="content"
                  value={content}
                  className="form-control"
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>
              <button className="btn btn-success">Create Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
