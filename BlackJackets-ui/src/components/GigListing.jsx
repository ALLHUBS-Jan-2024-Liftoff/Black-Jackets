import React from "react";
import { useNavigate } from "react-router-dom";

const GigListing = ({ gig, isVenuePage }) => {
  const navigator = useNavigate();

  const handleViewDetailsButton = (id) => {
    navigator(`../gigs/view/${id}`);
  };
  const handleSeeVenueButton = (id) => {
    navigator(`../guest-view/${id}`);
  };

  return (
    <tr key={gig.id}>
      <td>{gig.date}</td>
      <td>{gig.name}</td>
      <td>{gig.headliner}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleViewDetailsButton(gig.id)}
        >
          View Gig Details
        </button>{" "}
      </td>

      {isVenuePage ? (
        <></>
      ) : (
        <td>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => handleSeeVenueButton(gig.venue.id)}
          >
            See Venue
          </button>
        </td>
      )}
    </tr>
  );
};

export default GigListing;
