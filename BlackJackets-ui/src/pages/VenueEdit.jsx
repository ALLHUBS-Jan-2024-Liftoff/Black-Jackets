import React, { useEffect, useState } from 'react'
import { getVenueById, editVenueById } from '../services/venueService';
import { useNavigate, useParams } from 'react-router-dom';

function VenueEdit() {
    const [name, setName] = useState("");
    const [capacity, setCapacity] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");  
    const [phone, setPhone] = useState("");  
    const navigator = useNavigate();
    
    const { id } = useParams();

          
  useEffect(() => {
      getVenueById(id).then((response) => {
      setName(response.data.name);
      setCapacity(response.data.capacity);
      setEmail(response.data.email);
      setLocation(response.data.location);
      setPhone(response.data.phone);
       })
     },[id])
   
    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            name != "" &&
            capacity != "" &&
            email != "" &&
            location != "" &&
            phone != "" 
        ) {
            // Edit venue
            const venue = { name, capacity, email, location, phone }
            editVenueById(id,venue);
            console.log(venue);
            e.preventDefault();
            navigator('/venue-list');
          }
    };
    
// const VenueEdit = ({ venue, onUpdate }) => {
//       const [name, setName] = useState(venue.name);
//       const [capacity, setCapacity] = useState(venue.capacity);
//       const [email, setEmail] = useState(venue.email);
//       const [location, setLocation] = useState(venue.location);  
//       const [phone, setPhone] = useState(venue.phone);  
  
//       useEffect(() => { getVenueById(id) }, [id]);
  
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         onUpdate({ ...venue, name, capacity, email, location, phone });
//       };
    



  return (
    <div className='container'>
          <br /><br />
          <div className='row'>
              <div className='card col-md-6 offset-md-3 offset-md-3'>
                  <h2 className='text-center'>Edit Venue</h2>
                  <div className='card-body'>
                      <form onSubmit={handleSubmit}>
                          <div className='form-group mb-2'>
                              <label className='form-label'> Name</label>
                              <input 
                                  type='text'
                                  placeholder={name}
                                  name='name'
                                  value={name}
                                  className='form-control'
                                  onChange={(e) => setName(e.target.value)} required />
                          </div>
                          <div className='form-group mb-2'>
                              <label className='form-label'>Capacity</label>
                              <input 
                                  type='text'
                                //   placeholder='Enter Capacity'
                                  name='capacity'
                                  value={capacity}
                                  className='form-control'
                                  onChange={(e) => setCapacity(e.target.value)} required />
                          </div>
                          <div className='form-group mb-2'>
                              <label className='form-label'>Email</label>
                              <input 
                                  type='email'
                                //   placeholder='Enter Email'
                                  name='email'
                                  value={email}
                                  className='form-control'
                                  onChange={(e) => setEmail(e.target.value)} required />
                          </div>
                          <div className='form-group mb-2'>
                              <label className='form-label'>Location</label>
                              <input 
                                  type='text'
                                //   placeholder='Enter Location'
                                  name='location'
                                  value={location}
                                  className='form-control'
                                  onChange={(e) => setLocation(e.target.value)} required />
                          </div>
                          <div className='form-group mb-2'>
                              <label className='form-label'>Phone</label>
                              <input 
                                  type='text'
                                //   placeholder='Enter Phone'
                                  name='phone'
                                  value={phone}
                                  className='form-control'
                                  onChange={(e) => setPhone(e.target.value)} required />
                          </div>
                          <button className='btn btn-success'>Update</button>
                      </form>
                  </div>
                  </div>
          </div>
        </div>
  )
}

export default VenueEdit