import React, { useEffect, useState } from 'react'
import { fetchVenues } from '../services/venueService'
import { useNavigate } from 'react-router-dom'
import '../pages/style.css'

function VenueUserDashboard() {

    const [venues, setVenues] = useState([]);
    const navigator = useNavigate();

    useEffect(() => { fetchVenues().then(setVenues) }, []); 
    
    function updateVenue(id) {
        navigator(`/edit-venue/${id}`);
    }
      
  return (
      <div className="container">
          {venues.map((venue) =>
              <div key={venue.id} className='details'>
                  <h1 className='header'>{venue.name}</h1>
                  <h6>
                      {venue.capacity}<br></br>
                      {venue.location}<br></br>
                      {venue.email}<br></br>
                      {venue.phone}<br></br>
                  </h6>
                  <button className="btn btn-info" onClick={() =>updateVenue(venue.id)}>Edit</button>
              </div>
            )}

    </div>
  )
}

export default VenueUserDashboard
