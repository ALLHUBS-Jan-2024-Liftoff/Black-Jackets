import React from "react";
import { useNavigate } from "react-router-dom";
//import "../pages/Contact.css";

function Contact() {
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "719cf01b-e37a-4b5c-a4db-e5b7b8710a5d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      //   console.log("Success", res);
      alert("Email has sent successfully!");
      navigate("/guest-view");
    }
  };

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Contact Form</h2>
          <div className="card-body">
            {/* <form onSubmit={handleSubmit}> */}
            <form onSubmit={onSubmit}>
              <div className="form-group mb-2">
                <label className="form-label"> Name</label>
                <input
                  type="text"
                  placeholder="Enter Band Name"
                  name="name"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Message</label>
                <textarea
                  type="textarea"
                  placeholder="Enter Content"
                  name="message"
                  className="form-control"
                  //onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>
              <button className="btn btn-success">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
