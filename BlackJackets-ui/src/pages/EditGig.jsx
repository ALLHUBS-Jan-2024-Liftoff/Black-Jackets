import React, { useEffect, useState } from "react";
import { editGig, fetchGig } from "../services/GigService";
import { genreList } from "../services/GigService";
import { useParams } from "react-router-dom";

const EditGigForm = () => {
  const {id} = useParams();
  // const [name, setName] = useState("");
  // const [date, setDate] = useState("");
  // const [genre, setGenre] = useState("");
  // const [ages, setAges] = useState("");
  // const [headliner, setHeadliner] = useState("");
  // const [openingAct, setOpeningAct] = useState("");
  // const [supportingAct, setSupportingAct] = useState("");
  // const [bandSlots, setBandSlots] = useState(0);
  // image input state
const [gig, setGig] = useState({
    name: "",
    date: "",
    genre: "",
    ages: "",
    headliner: "",
    bandSlots: null,
    supportingAct: "",
    openingAct: ""
})

  useEffect(()=>{
    fetchGig(id).then((response)=>{
      setGig(response);
    })
  }, [])

  const genres = genreList;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      gig.name.trim() != "" &&
      gig.date != null &&
      gig.genre.trim() != "" &&
      gig.ages != "" &&
      gig.headliner.trim() != "" &&
      gig.bandSlots >= 0
      // && validation for img
    ) {
      editGig(
        id,
        gig
      );
      alert("Gig Edited!");
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
                    value={gig.name}
                    onChange={(e) => setGig({ ...gig, name: e.target.value})}
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
                    value={gig.date}
                    onChange={(e) => setGig({...gig, date: e.target.value})}
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
                      onChange={(e) => setGig({...gig, genre: e.target.value})}
                      checked={gig.genre == g}
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
                  onChange={(e) => setGig({...gig, ages: e.target.value})}
                  checked={gig.ages == "Ages 21+"}
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
                  onChange={(e) => setGig({...gig, ages: e.target.value})}
                  checked={gig.ages == "All Ages"}
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
                    value={gig.headliner}
                    onChange={(e) => setGig({...gig, headliner: e.target.value})}
                    required
                  />
                </label>
              </div>

              {gig.bandSlots != null && (<div className="form-group mb-2">
                <label className="form-label">
                  Number of Bands in Gig Line-Up (0–2)
                  <input
                    type="number"
                    className="form-control"
                    value={gig.bandSlots}
                    min={0}
                    max={2}
                    onChange={(e) => {
                      // change number of available band inputs
                      if (e.target.value <= 2 && e.target.value >= 0) {
                       setGig({...gig, bandSlots: e.target.value})
                      }
                      if (e.target.value == 0) {
                        setGig({...gig, openingAct: ""})
                        setGig({...gig, supportingAct: ""})
                      }
                      if (e.target.value == 1) {
                        if (gig.openingAct == "") {
                          setGig({...gig, openingAct: "Open Slot"})
                        }
                        setGig({...gig, supportingAct: ""})
                      }
                      if (e.target.value == 2) {
                        if (gig.openingAct == "") {
                          setGig({...gig, openingAct: "Open Slot"})
                        }
                        setGig({...gig, supportingAct: "Open Slot"})
                      }
                    }}
                    required
                  />
                </label>
              </div>)}

              {+gig.bandSlots >= 1 ? (
                <div className="form-group mb-2">
                  <label className="form-label">
                    Name of Opening Act
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={gig.openingAct}
                      onChange={(e) => setGig({...gig, openingAct: e.target.value})}
                      required
                    />
                  </label>
                </div>
              ) : (
                <></>
              )}

              {+gig.bandSlots == 2 ? (
                <div className="form-group mb-2">
                  <label className="form-label">
                    Name of Supporting Act
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={gig.supportingAct}
                      onChange={(e) => setGig({...gig, supportingAct: e.target.value})}
                      required
                    />
                  </label>
                </div>
              ) : (
                <></>
              )}

              <button type="submit" className="btn btn-success">
                Edit Gig
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditGigForm;
