import React, { useState, useEffect } from "react";
import { fetchVenues, addVenue } from "../services/venueService";
import { useNavigate } from "react-router-dom";

export default function VenueList() {

    const [venues, setVenues] = useState([]);
    const navigator = useNavigate();

    // Fetch all venues
    useEffect(() => {
        fetchVenues().then(setVenues)
            .catch((error) => {
                console.error("Error occurs while fetching venues!", error);
            });
    }, []);

    function addNewVenue() {
        navigator('/add-venue');
    }

    return (
        <div className="container">

            <h2 className="text-container">List of Venues</h2>
            <button className="btn btn-primary mb-2" onClick={addNewVenue}>Add Venue</button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Capacity</th>
                        <th>Location</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {venues.map((venue) =>
                            <tr key={venue.id}>
                                <td>{venue.id}</td>
                                <td>{venue.name}</td>
                                <td>{venue.capacity}</td>
                                <td>{venue.location}</td>
                                <td>{venue.email}</td>
                                <td>{venue.phone}</td>
                            </tr>)}
                </tbody>
          </table>
      </div>
  );
}
