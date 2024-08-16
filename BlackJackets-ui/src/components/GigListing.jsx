import React from "react";
import { useNavigate } from "react-router-dom";

const GigListing = ({ gig, isVenuePage }) => {
  const navigator = useNavigate();

  const handleViewDetailsButton = (id) => {
    navigator(`../gigs/view/${id}`);
  };
  const handleSeeVenueButton = () => {}; /* Link to Venue's page */

  return (
    <tr key={gig.id}>
      <td>{gig.date}</td>
      <td>{gig.name}</td>
      <td>{gig.headliner}</td>
      <td>
        <button
          type="button"
          className="btn button-info"
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
            className="btn button-primary"
            onClick={handleSeeVenueButton()}
          >
            See Venue
          </button>{" "}
        </td>
      )}
    </tr>
  );
};

export default GigListing;
