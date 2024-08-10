import React from "react";

const GigListing = ({ gig }) => {
  return (
    <tr key={gig.id}>
        <th scope="row"></th>
        <td>{gig.date}</td>
        <td>{gig.name}</td>
        <td>{gig.headliner}</td>
        <td>
            <button className="btn button-info">View Details</button> {/* Add onClick to link to view */}
        </td>
        <td>
            <button className="btn button-primary">See Venue</button> {/* Add onCLick to link to Venue's page */}
        </td>
    </tr>
  );
};

export default GigListing;
