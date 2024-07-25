import React, { useState } from "react";
// import { addGig } from "../services/GigService";

const CreateGigForm = ({addGig}) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [genre, setGenre] = useState("");
  const [ages, setAges] = useState("");
  const [headliner, setHeadliner] = useState("");
  const [bandSlots, setBandSlots] = useState(0); // will enter a number, will run a loop to create a hashmap with incrementing id's and "Open Slot" as the bandName
  // const [img, setImg] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name != "" &&
      date != null &&
      genre != "" &&
      ages != "" &&
      headliner != "" &&
      bandSlots >= 0 /* && validation for img */
    ) {
      addGig(name, date, genre, ages, headliner, bandSlots);
      setName("");
      setDate("");
      setGenre("");
      setAges("");
      setHeadliner("");
      setBandSlots(0);
    }
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">
            Name
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Date
            <input
              type="datetime-local"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Genre
            <input
              type="text"
              className="form-control"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Ages
            <input
              type="text"
              className="form-control"
              value={ages}
              onChange={(e) => setAges(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Headliner
            <input
              type="text"
              className="form-control"
              value={headliner}
              onChange={(e) => setHeadliner(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Number of bands in show line-up
            <input
              type="number"
              className="form-control"
              value={bandSlots}
              onChange={(e) => setBandSlots(e.target.value)}
              required
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Create Gig
        </button>
      </form>
    </div>
  );
};

export default CreateGigForm;
