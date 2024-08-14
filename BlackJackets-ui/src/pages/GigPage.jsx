import React, { useEffect, useState } from "react";
import { fetchGig } from "../services/GigService";
import { useNavigate, useParams } from "react-router-dom";

const GigPage = () => {
  const [gig, setGig] = useState({});
  const [loading, setLoading] = useState(true);

  const navigator = useNavigate();

  const { gigId } = useParams();

  useEffect(() => {
    fetchGig(gigId)
      .then(setGig)
      .catch((error) => {
        console.error("Error fetching gig", error);
        alert("Error fetching gig");
      });
    setLoading(false);
  }, []);

  return (
    <div className="container">
      <button
      className="btn btn-outline-primary btn-block"
        onClick={() => {
          navigator(`../gigs/search`);
        }}
      >
        Back to Gigs
      </button>
      {loading ? (
        <h1>LOADING GIG...</h1>
      ) : (
        <>
          <h1>{gig.name}</h1>
          <ul>
            <li>{gig.date}</li>
            <li>VENUE NAME</li>
            <li>{gig.genre}</li>
            <li>
              Band Line Up
              <ul>
                <li>Headliner: {gig.headliner}</li>
                {gig.openingAct ? (
                  <li>Opening Act: {gig.openingAct}</li>
                ) : (
                  <></>
                )}
                {gig.supportingAct ? (
                  <li>Supporting Act: {gig.supportingAct}</li>
                ) : (
                  <></>
                )}
              </ul>
            </li>

            <li>{gig.ages}</li>
            <li>VENUE EMAIL</li>
            <li>VENUE PHONE</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default GigPage;
