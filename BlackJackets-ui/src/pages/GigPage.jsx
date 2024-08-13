import React, { useEffect, useState } from "react";
import { fetchGig } from "../services/GigService";

const GigPage = ({ gigId }) => {
  const [gig, setGig] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGig(gigId)
      .then(setGig)
      .catch((error) => {
        console.error("Error fetching gig", error);
      });
    setLoading(false);
  }, []);

  return (
    <div className="container">
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
