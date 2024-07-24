import React, { useState, useEffect } from "react";
import { fetchVenues, addVenue } from "../services/venueService";

export default function VenueList() {

    const [venues, setVenues] = useState([]);

    // Fetch all venues
    useEffect(() => {
        fetchVenues().then(setVenues)
            .catch((error) => {
                console.error("Error occurs while fetching venues!", error);
            });
    }, []);

    return (
        <div className="mt-5 container">
        <h2 className="text-container">List of Venues</h2>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Venue Id</th>
                        <th>Venue Name</th>
                        <th>Venue Capacity</th>
                        <th>Venue Location</th>
                        <th>Venue Email</th>
                        <th>Venue Phone</th>
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
                                <td>{venue.venuePhone}</td>
                            </tr>)}
                </tbody>
          </table>
      </div>
  );
}
