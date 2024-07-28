import React, { useState } from "react";
// import { addGig } from "../services/GigService";

const CreateGigForm = ({ addGig }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [genre, setGenre] = useState("");
  const [ages, setAges] = useState("");
  const [headliner, setHeadliner] = useState("");
  const [openingAct, setOpeningAct] = useState("");
  const [supportingAct, setSupportingAct] = useState("");
  const [bandSlots, setBandSlots] = useState(0);
  // image input state

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name != "" &&
      date != null &&
      genre != "" &&
      ages != "" &&
      headliner != "" &&
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
        openingAct
      );
      setName("");
      setDate("");
      setGenre("");
      setAges("");
      setHeadliner("");
      setBandSlots(0);
      setSupportingAct("");
      setOpeningAct("");
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
              min={0}
              max={2}
              onChange={(e) => {
                // change number of available band inputs
                if (e.target.value <= 2 && e.target.value >= 0) {
                  setBandSlots(e.target.value);
                }
                // //  switch didn't work
                // switch (e.target.value) {
                //   case 0:
                //     setOpeningAct("");
                //   case 1:
                //     setSupportingAct("");
                //     break;
                //   default:
                //     break;
                // }
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
          <div className="mb-3">
            <label className="form-label">
              Name of Opening Act
              <input
                type="text"
                className="form-control"
                defaultValue={openingAct}
                onChange={(e) => setOpeningAct(e.target.value)}
              />
            </label>
          </div>
        ) : (
          <></>
        )}

        {+bandSlots == 2 ? (
          <div className="mb-3">
            <label className="form-label">
              Name of Supporting Act
              <input
                type="text"
                className="form-control"
                defaultValue={supportingAct}
                onChange={(e) => setSupportingAct(e.target.value)}
              />
            </label>
          </div>
        ) : (
          <></>
        )}

        <button type="submit" className="btn btn-primary mt-3">
          Create Gig
        </button>
      </form>
    </div>
  );
};

export default CreateGigForm;