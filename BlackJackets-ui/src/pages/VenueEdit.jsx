import React, { useEffect, useState } from "react";
import { getVenueById, editVenueById } from "../services/venueService";
import { useNavigate, useParams } from "react-router-dom";

function VenueEdit() {
  const [venue, setVenue] = useState({
    name: "",
    capacity: "",
    email: "",
    location: "",
    phone: "",
    video: "",
  });
  const navigator = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getVenueById(id).then((response) => {
      setVenue(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    editVenueById(id, venue).then((response) => {
      navigator("/venue-dashboard");
    });
  };

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Edit Venue</h2>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <label className="form-label"> Name</label>
                <input
                  type="text"
                  name="name"
                  value={venue.name}
                  className="form-control"
                  onChange={(e) => setVenue({ ...venue, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Capacity</label>
                <input
                  type="text"
                  name="capacity"
                  value={venue.capacity}
                  className="form-control"
                  onChange={(e) =>
                    setVenue({ ...venue, capacity: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={venue.email}
                  className="form-control"
                  onChange={(e) =>
                    setVenue({ ...venue, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  name="location"
                  value={venue.location}
                  className="form-control"
                  onChange={(e) =>
                    setVenue({ ...venue, location: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={venue.phone}
                  className="form-control"
                  onChange={(e) =>
                    setVenue({ ...venue, phone: e.target.value })
                  }
                  required
                />
              </div>
               <div className='form-group mb-2'>
                    <label className='form-label'>Video</label>
                         <input
                          type='text'
                          name='video'
                          value={venue.video}
                          className='form-control'
                          onChange={e => setVenue({...venue, video:e.target.value})} required />
               </div>
              <button className="btn btn-success" type="submit">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VenueEdit;
