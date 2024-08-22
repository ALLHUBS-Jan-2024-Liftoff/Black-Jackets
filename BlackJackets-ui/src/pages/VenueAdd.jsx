import React, { useState } from "react";
import { addVenue } from "../services/venueService";
// import { fetchUser } from "../services/UserService";
import { useNavigate } from "react-router-dom";

export default function VenuePage( { setVenueId } ) {
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
       
  const handleSubmit = (e) => {
      e.preventDefault();
      if (
        name != "" &&
        capacity != "" &&  
        email != "" &&
        location != "" &&
        phone != ""
      ) {
        const venue = { name, capacity, email, location, phone };
        addVenue(venue).then((data) => {
        console.log(`data: ${JSON.stringify(data)}`);
        const venuedata = JSON.parse(data.venue);
        setVenueId(venuedata.id);
        alert("Venue created");
        navigate("/venue-dashboard");
        })
        
      }
  }
  
  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Venue</h2>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <label className="form-label"> Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={name}
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Capacity</label>
                <input
                  type="text"
                  placeholder="Enter Capacity"
                  name="capacity"
                  value={capacity}
                  className="form-control"
                  onChange={(e) => setCapacity(e.target.value)}
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
                <label className="form-label">Location</label>
                <input
                  type="text"
                  placeholder="Enter Location"
                  name="location"
                  value={location}
                  className="form-control"
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  placeholder="Enter Phone"
                  name="phone"
                  value={phone}
                  className="form-control"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <button className="btn btn-success">Create Venue</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
