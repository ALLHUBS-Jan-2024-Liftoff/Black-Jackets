import React from "react";
import { useState, useEffect } from "react";
import { fetchGigs } from "../services/GigService";
import GigListing from "./GigListing";

const GigListings = ({ isVenue }) => {
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGigs(isVenue)
      .then(setGigs)
      .catch((error) => {
        console.error("Error fetching gigs", error);
      });
    setLoading(false);
  }, []);

  return (
    <section>
      <h2>{isVenue ? "Upcoming Gigs" : "Browse Gigs"}</h2>

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
            {gigs.map((gig) => {
              <GigListing
                gig={gig}
              />; /* add a button inside listing for view details button and for view Venue button */
            })}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default GigListings;
