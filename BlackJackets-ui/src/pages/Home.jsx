import React from "react";
import venueLogo from "../assets/images/568.jpg";
import bandLogo from "../assets/images/musicians-stage-concert.jpg";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center fw-bold" style={{ padding: "15px" }}>
          Welcome To Find A Gig!
        </h1>

        <div className="row">
          <div className="col-sm">
            <div className="card bg-dark text-white">
              <img
                className="card-img-top"
                src={venueLogo}
                alt="image of stage"
              ></img>
              <p className="text-end fw-light fst-italic">
                Image by Drazen Zigic on Freepik
              </p>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Venues</h5>
                <p className="card-text">
                  Are you looking to get your shows filled by great bands who
                  are eager to play? Register for a free account and get
                  started!
                </p>
                <a href="/register" className="btn btn-primary mt-auto">
                  Register
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="card bg-dark text-white">
              <img
                className="card-img-top"
                src={bandLogo}
                alt="image of band"
              ></img>
              <p className="text-end fw-light fst-italic">
                Image by Kireyonok_Yuliya on Freepik
              </p>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Bands</h5>
                <p className="card-text">
                  Ready to get your name out there and have fun? Start browsing
                  gigs available now!
                </p>
                <a href="/gigs/search" className="btn btn-primary mt-auto">
                  Browse Gigs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
