import React from "react";
import { useState, useEffect } from "react";
import { fetchGigs } from "../services/GigService";
import GigListing from "./GigListing";

const GigListings = ({ isVenuePage, venueId }) => {
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [venue, setVenue] = useState(null);

  if (isVenuePage) {
    setVenue(venueId);
  }

  useEffect(() => {
    fetchGigs(isVenuePage, venue)
      .then(setGigs)
      .catch((error) => {
        console.error("Error fetching gigs", error);
      });
    setLoading(false);
  }, []);

  return (
    <section>
      <h2>{isVenuePage ? "Upcoming Gigs" : "Browse Gigs"}</h2>

      {loading ? (
        <h1>LOADING...</h1>
      ) : (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Show Name</th>
              <th scope="col">Starring</th>
            </tr>
          </thead>
          <tbody>
            {gigs.map((gig) => (
              <GigListing key={gig.id} gig={gig} isVenuePage={isVenuePage} />
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default GigListings;
