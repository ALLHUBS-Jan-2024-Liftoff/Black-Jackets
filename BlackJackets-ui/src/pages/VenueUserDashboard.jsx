import React, { useEffect, useState } from 'react'
import { fetchGigsListByVenueId, fetchVenues, getVenueById } from '../services/venueService'
import { useNavigate, useParams } from 'react-router-dom'
import '../pages/style.css'

function VenueUserDashboard({ venueId }) {

    const [venues, setVenues] = useState([]);
    const [gigs, setGigs] = useState([]);
    const navigator = useNavigate();
          
    useEffect(() => {
        fetchVenues().then(setVenues)
        fetchGigsListByVenueId(venueId).then(setGigs)}, []); 
               
    function updateVenue(id) {
        navigator(`/edit-venue/${id}`);
    }
      
    return (
      <>
      <div className="container">
          {venues.map((venue) =>
              //   <div key={venue.id} className='details'>
                 <div key={venue.id}>
                  <h1 className='header'>{venue.name}</h1>
                  <div className='details'>
                  <h6>
                      {venue.capacity}<br></br>
                      {venue.location}<br></br>
                      {venue.email}<br></br>
                      {venue.phone}<br></br>
                  </h6>
                  <button className="btn btn-info" onClick={() =>updateVenue(venue.id)}>Edit</button>
                  </div>
            </div>
            )}
            </div>
            <div className="container">
            <h2 className="text-container">List of Gigs For This Venue</h2>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Genre</th>
                        <th>Ages</th>
                        <th>HeadLiner</th>
                        <th>SupportingAct</th>
                        <th>OpeningAct</th>
                        <th>Bandslots</th>
                    </tr>
                </thead>
                <tbody>
                    {gigs.map((gig) =>
                            <tr key={gig.id}>
                                <td>{gig.id}</td>
                                <td>{gig.name}</td>
                                <td>{gig.date}</td>
                                <td>{gig.genre}</td>
                                <td>{gig.ages}</td>
                                <td>{gig.headliner}</td>
                                <td>{gig.supportingAct}</td>
                                <td>{gig.openingAct}</td>
                                <td>{gig.bandSlots}</td>
                        </tr>)}
                </tbody>
          </table>
      </div>
     </>
  )
}

export default VenueUserDashboard
