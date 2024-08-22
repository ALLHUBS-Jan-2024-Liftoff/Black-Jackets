import React from "react";
import drums from "../assets/images/35499.jpg";

function About() {
  return (
    <div
      className="card bg-dark text-white rounded-0"
      style={{ height: "100vh" }}
    >
      <img className="card-img" src={drums} alt="Card image" />
      <div className="card-img-overlay">
        <h5 className="card-title h1">About Find A Gig</h5>
        <p className="card-text">
          Find A Gig was created as a LaunchCode Web Development capstone
          project by the Black Jackets
        </p>
      </div>
      <p className="text-end fw-light fst-italic">
        Image by master1305 on Freepik
      </p>
    </div>
  );
}

export default About;
