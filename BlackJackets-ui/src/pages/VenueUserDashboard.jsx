import React, { useEffect, useState } from 'react'
import { fetchGigsListByVenueId, getVenueById } from '../services/venueService'
import { deleteGig } from '../services/GigService'
import { useNavigate } from 'react-router-dom'
import '../pages/style.css'

function VenueUserDashboard({ venueId }) {
    const [venue, setVenue] = useState([]);
    const [gigs, setGigs] = useState([]);
    const navigator = useNavigate();
      
    useEffect(() => {
        getVenueById(venueId).then((response) => {
            setVenue(response.data)
            fetchGigsListByVenueId(venueId).then(setGigs)
        }) } , [])
                      
    function updateVenue(id) {
        navigator(`/edit-venue/${id}`);
    }

    function handleCreateGig() {
        navigator(`/gigs/add`);
    }

    function handleDeleteGig(id) {
         deleteGig(id);
         setGigs((prevGigs) => prevGigs.filter(gig => gig.id !== id));
        }

    return (
        <div>
            <div className="container">
                <br/><br/>
                <h1 className='header'>{venue.name}</h1><br />
                <div className='details'>
                 {venue.capacity}<br />
                 {venue.location}<br />
                 {venue.email}<br />
                 {venue.phone}<br />
                <div className='button'>
                <button className="btn btn-info" onClick={handleCreateGig}>Add Gig </button>
                <button className="btn btn-info" onClick={() =>updateVenue(venue.id)}>Edit</button>
                </div>
             </div>
            </div>
            <div className="container">
                <br /><br/><br/><br/><br/><br/><br/>
                
             <h2>List of Gigs For This Venue</h2>
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
                         <th>Action</th>
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
                                <td>
                                <button className="btn btn-info" onClick={() =>handleDeleteGig(gig.id)}>Delete</button>
                                </td>
                        </tr>)}
                </tbody>
          </table>
      </div>
        </div>
    )   
}

export default VenueUserDashboard
