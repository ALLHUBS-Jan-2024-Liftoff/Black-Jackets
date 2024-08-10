import React from "react";
import { useState, useEffect } from "react";

const GigListings = ({ isVenue = false }) => {
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGigs = async () => {
      const apiUrl = isVenue
        ? `http://localhost:8090/gigs/list/${venueId}`
        : "http://localhost:8090/gigs/list/all";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setGigs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGigs();
  }, []);

  return (
    <section>
      <div>
        <h2>{isVenue ? "Upcoming Gigs" : "Browse Gigs"}</h2>

        {loading ? <h1>LOADING...</h1> : <div>{gigs.map((gig)=>{
            <GigListing key={gig.id} gig={gig} />
        })}</div>}
      </div>
    </section>
  );
};

export default GigListings;
