import React from "react";
import { useState, useEffect } from "react";
import { fetchGigs } from "../services/GigService";
import GigListing from "./GigListing";
import { genreList, agesList } from "../services/GigService";

const GigListings = ({ isVenuePage = false, venueId = null }) => {
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [venue, setVenue] = useState(null);
  const [filteredGigs, setFilteredGigs] = useState([]);
  const [filterField, setFilterField] = useState("all");
  const [filterValue, setFilterValue] = useState("");
  const [filterTitle, setFilterTitle] = useState("All Gigs");

  const filterGigs = (gigArray) => {
    if (filterField == "all") {
      setFilterTitle("All Gigs");
      return gigs; // returns all gigs received from DB
    }

    if (filterValue != "select") {
      // checks if a value has been selected

      setFilterTitle(`Gigs with ${filterField}: ${filterValue}`);

      if (filterField == "Genre") {
        return gigArray.filter((gig) => gig.genre == filterValue); // renders filteredGigs which match the genre selected
      }
      if (filterField == "Ages") {
        return gigArray.filter((gig) => gig.ages == filterValue); // renders filteredGigs which match the ages selected
      }
    }
    return filteredGigs; // no option was selected so it returns what is currently displayed
  };

  function sendEmail(filteredGigs) {
    var venues = filteredGigs.map(({ venue }) => venue);
    var emails = venues.map(( { email }) => email);
    let email = emails.join();
    var subject = "Interested in your gig!";
    
    window.location =
      "mailto:" + email + "?subject=" + subject;
  }

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

  useEffect(() => {
    setFilteredGigs(gigs);
  }, [gigs]);

  return (
    <section>
      <h2>{isVenuePage ? "Upcoming Gigs" : "Browse Gigs"}</h2>

      <div className="form-inline">
        <label>
          Filter by:
          <select
            className="form-select"
            onChange={(e) => {
              setFilterField(e.target.value);
              setFilterValue("select");
            }}
          >
            <option value="all">All</option>
            <option value="Genre">Genre</option>
            <option value="Ages">Ages</option>
          </select>
        </label>

        {filterField != "all" && (
          <label>
            <select
              className="form-select"
              defaultValue="select"
              onChange={(e) => setFilterValue(e.target.value)}
            >
              <option value="select">-- Select {filterField} --</option>
              {filterField == "Genre" && (
                <>
                  {genreList.map((genre) => (
                    <option value={genre} key={genre}>
                      {genre}
                    </option>
                  ))}
                </>
              )}
              {filterField == "Ages" && (
                <>
                  {agesList.map((age) => (
                    <option value={age} key={age}>
                      {age}
                    </option>
                  ))}
                </>
              )}
            </select>
          </label>
        )}
        {
          <button
            className="btn btn-outline-primary"
            onClick={() => setFilteredGigs(filterGigs(gigs))}
          >
            Apply Filter
          </button>
        }
        {
          <button
            className="btn btn-outline-primary"
            onClick={() => sendEmail(filteredGigs)}
          >
            Contact Venues
          </button>
        }
      </div>

      {loading ? (
        <h1>LOADING...</h1>
      ) : (
        <>
          <h2>{filterTitle}</h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Show Name</th>
                <th scope="col">Starring</th>
              </tr>
            </thead>
            {filteredGigs.length == 0 ? (
              <tbody>
                <tr>
                  <td className="text-danger">No Gigs to Show!</td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {filteredGigs.map((gig) => (
                  <GigListing
                    key={gig.id}
                    gig={gig}
                    isVenuePage={isVenuePage}
                  />
                ))}
              </tbody>
            )}
          </table>
        </>
      )}
    </section>
  );
};

export default GigListings;
