import React from "react";
import { useState, useEffect } from "react";
import { fetchGigs } from "../services/GigService";
import GigListing from "./GigListing";

const GigListings = ({ isVenuePage, venueId }) => {
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [venue, setVenue] = useState(null);
  const [filteredGigs, setFilteredGigs] = useState([]);

  const filterGigs = (gigArray, field, value) => {
    if (field == "all") {
      // renders gigs in ternary by setting filteredGigs to empty
      return [];
    }
    if (field == "genre") {
      // renders filteredGigs which match the genre selected
      return gigArray.filter((gig) => gig.genre == value);
    }
    if (field == "ages") {
      // renders filteredGigs which match the ages selected
      return gigArray.filter((gig) => gig.ages == value);
    }
  };

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
      {/* Test Button to test filter */}
      <button
        onClick={() => {
          setFilteredGigs(filterGigs(gigs, "genre", "Metal"));
        }}
      >
        CLICK TO FILTER
      </button>

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
          {/* renders based on filteredGigs being set or not */}
          {filteredGigs.length > 0 ? (
            <tbody>
              {filteredGigs.map((gig) => (
                <GigListing key={gig.id} gig={gig} isVenuePage={isVenuePage} />
              ))}
            </tbody>
          ) : (
            <tbody>
              {gigs.map((gig) => (
                <GigListing key={gig.id} gig={gig} isVenuePage={isVenuePage} />
              ))}
            </tbody>
          )}
        </table>
      )}
    </section>
  );
};

export default GigListings;
