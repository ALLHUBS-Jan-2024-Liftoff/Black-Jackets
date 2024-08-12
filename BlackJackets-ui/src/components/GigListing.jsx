import React from "react";

const GigListing = ({ gig, isVenuePage }) => {
  const handleViewDetailsButton = () => {}; /* Link to single Gig view */
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
          onClick={handleViewDetailsButton()}
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
