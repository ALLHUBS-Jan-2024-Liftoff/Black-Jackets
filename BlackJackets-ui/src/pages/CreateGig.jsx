import React, { useState } from "react";
import { addGig } from "../services/GigService";
import { genreList } from "../services/GigService";
import { useParams, useNavigate } from "react-router-dom";

const CreateGigForm = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [genre, setGenre] = useState("");
  const [ages, setAges] = useState("");
  const [headliner, setHeadliner] = useState("");
  const [openingAct, setOpeningAct] = useState("");
  const [supportingAct, setSupportingAct] = useState("");
  const [bandSlots, setBandSlots] = useState(0);
  const {id} = useParams();
  // image input state

  const genres = genreList;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim() != "" &&
      date != null &&
      genre.trim() != "" &&
      ages != "" &&
      headliner.trim() != "" &&
      bandSlots >= 0
      // && validation for img
    ) {
      addGig(
        name,
        date,
        genre,
        ages,
        headliner,
        bandSlots,
        supportingAct,
        openingAct,
        id
      );
      alert("Gig Created!");
      setName("");
      setDate("");
      setGenre("");
      setAges("");
      setHeadliner("");
      setBandSlots(0);
      setSupportingAct("");
      setOpeningAct("");
      navigate("/venue-dashboard");
    }
  };

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Gig</h2>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <label className="form-label">
                  Name of the Gig
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">
                  Date of the Gig
                  <input
                    type="datetime-local"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </label>
              </div>

              <p>Select Music Genre</p>
              {genres.map((g, i) => {
                return (
                  <div className="form-check" key={g}>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="Genre"
                      id={`genre${i}`}
                      value={g}
                      onChange={(e) => setGenre(e.target.value)}
                      checked={genre == g}
                      required
                    />
                    <label className="form-check-label" htmlFor={`genre${i}`}>
                      {g}
                    </label>
                  </div>
                );
              })}

              <p>Select Age Range</p>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="Age"
                  id="age1"
                  value="Ages 21+"
                  onChange={(e) => setAges(e.target.value)}
                  checked={ages == "Ages 21+"}
                  required
                />
                <label className="form-check-label" htmlFor="age1">
                  Ages 21+
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="Age"
                  id="age2"
                  value="All Ages"
                  onChange={(e) => setAges(e.target.value)}
                  checked={ages == "All Ages"}
                  required
                />
                <label className="form-check-label" htmlFor="age2">
                  All Ages
                </label>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">
                  Gig's Headliner
                  <input
                    type="text"
                    className="form-control"
                    value={headliner}
                    onChange={(e) => setHeadliner(e.target.value)}
                    required
                  />
                </label>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">
                  Number of Bands in Gig Line-Up (0–2)
                  <input
                    type="number"
                    className="form-control"
                    value={bandSlots}
                    min={0}
                    max={2}
                    onChange={(e) => {
                      // change number of available band inputs
                      if (e.target.value <= 2 && e.target.value >= 0) {
                        setBandSlots(e.target.value);
                      }
                      if (e.target.value == 0) {
                        setOpeningAct("");
                        setSupportingAct("");
                      }
                      if (e.target.value == 1) {
                        if (openingAct == "") {
                          setOpeningAct("Open Slot");
                        }
                        setSupportingAct("");
                      }
                      if (e.target.value == 2) {
                        if (openingAct == "") {
                          setOpeningAct("Open Slot");
                        }
                        setSupportingAct("Open Slot");
                      }
                    }}
                    required
                  />
                </label>
              </div>

              {+bandSlots >= 1 ? (
                <div className="form-group mb-2">
                  <label className="form-label">
                    Name of Opening Act
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={openingAct}
                      onChange={(e) => setOpeningAct(e.target.value)}
                      required
                    />
                  </label>
                </div>
              ) : (
                <></>
              )}

              {+bandSlots == 2 ? (
                <div className="form-group mb-2">
                  <label className="form-label">
                    Name of Supporting Act
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={supportingAct}
                      onChange={(e) => setSupportingAct(e.target.value)}
                      required
                    />
                  </label>
                </div>
              ) : (
                <></>
              )}

              <button type="submit" className="btn btn-success">
                Create Gig
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateGigForm;
