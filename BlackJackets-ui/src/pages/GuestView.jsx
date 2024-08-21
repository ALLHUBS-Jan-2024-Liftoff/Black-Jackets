import React, { useEffect, useState } from "react";
import { fetchGigsListByVenueId, fetchVenues } from "../services/venueService";
import { useNavigate, useParams } from "react-router-dom";
import "../pages/style.css";

function GuestView() {
  const [venueList, setVenueList] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [items, setItems] = useState([]);
  //const { venueId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetchVenues().then(setVenueList);
  }, []);

  const handleVenueChange = (event) => {
    setSelectedOption(event.target.value);
    fetchGigsListByVenueId(event.target.value).then(setItems);
  };

  function handleBandMessage() {
    const venueId = selectedOption;
    console.log(venueId);
    navigate(`/band-message/${venueId}`);
  }

  function handleContactForm() {
    navigate("/contact-form");
  }

  return (
    <>
      <div>
        <div className="container">
          <br />
          <br />
          <div>
            <label htmlFor="venue">Venue List: </label>
            <select value={selectedOption} onChange={handleVenueChange}>
              <option value="">Select a venue</option>
              {venueList.map((venue) => (
                <option key={venue.id} value={venue.id}>
                  {venue.name}
                </option>
              ))}
            </select>
            {venueList
              .filter((venues) => venues.id == selectedOption)
              .map((venue) => (
                <>
                  <h1 className="header">{venue.name}</h1>
                  <br />
                  <div className="details">
                    <h3 className="h3">Venue Details</h3>
                    Capacity : {venue.capacity} <br />
                    Location : {venue.location} <br />
                    Email : {venue.email} <br />
                    Phone : {venue.phone} <br />
                  </div>
                </>
              ))}
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
              <div className="button">
                <button
                  className="btn btn-info"
                  onClick={() => handleBandMessage()}>
                  Send A Message
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => handleContactForm()}>
                  Contact Form
                </button>
              </div>
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
                {items.length > 0 ? (
                  items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.date}</td>
                      <td>{item.genre}</td>
                      <td>{item.ages}</td>
                      <td>{item.headliner}</td>
                      <td>{item.openingAct}</td>
                      <td>{item.supportingAct}</td>
                      <td>{item.bandSlots}</td>
                    </tr>
                  ))
                ) : (
                  <li>No items found</li>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default GuestView;
