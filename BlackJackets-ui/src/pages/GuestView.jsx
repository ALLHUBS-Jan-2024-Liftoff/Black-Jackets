import React, { useEffect, useState } from "react";
import { fetchGigsListByVenueId, getVenueById } from "../services/venueService";
import { useNavigate } from "react-router-dom";
import "../pages/style.css";

function GuestView({ venueId }) {
  const [venue, setVenue] = useState([]);
  const [gigs, setGigs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getVenueById(venueId).then((response) => {
      setVenue(response.data);
      fetchGigsListByVenueId(venueId).then(setGigs);
    });
  }, []);

  function handleBandMessage() {
    navigate("/add-message");
  }

  return (
    <div>
      <div className="container">
        <br />
        <br />
        <h1 className="header">{venue.name}</h1>
        <br />
        <div className="details">
          {venue.capacity}
          <br />
          {venue.location}
          <br />
          {venue.email}
          <br />
          {venue.phone}
          <br />
        </div>
      </div>
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="list">
          <button className="btn btn-info" onClick={() => handleBandMessage()}>
            Send A Message
          </button>
          <br />
          <br />
          <h2>List of Upcoming Gigs</h2>
        </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Date</th>
              <th>Genre</th>
              <th>Ages</th>
              <th>HeadLiner</th>
              <th>OpeningAct</th>
              <th>SupportingAct</th>
              <th>Bandslots</th>
            </tr>
          </thead>
          <tbody>
            {gigs.map((gig) => (
              <tr key={gig.id}>
                <td>{gig.id}</td>
                <td>{gig.name}</td>
                <td>{gig.date}</td>
                <td>{gig.genre}</td>
                <td>{gig.ages}</td>
                <td>{gig.headliner}</td>
                <td>{gig.openingAct}</td>
                <td>{gig.supportingAct}</td>
                <td>{gig.bandSlots}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GuestView;
