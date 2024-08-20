import { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";
import Home from "./pages/Home";
import About from "./pages/About";
import RegisterForm from "./pages/Register";
import LoginForm from "./pages/Login";
import Logout from "./pages/Logout";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import VenueEdit from "./pages/VenueEdit";
// import VenueList from "./pages/VenueList";
import VenueUserDashboard from "./pages/VenueUserDashboard";
import GigPage from "./pages/GigPage";
import CreateGigForm from "./pages/CreateGig";
import VenueAdd from "./pages/VenueAdd";
import GigListings from "./components/GigListings";
import GuestView from "./pages/GuestView";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  // venueId will be set to the venueId related to the logged in user
  const [venueId, setVenueId] = useState(1);

  const [reviews, setReviews] = useState([]);

    const addReview = (review) => {
        setReviews([...reviews, review]);
 

  return (
    // <Home />
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Navbar authenticated={authenticated} />}
          >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route
              path="login"
              element={<LoginForm setAuthenticated={setAuthenticated} />}
            />
            <Route
              path="register"
              element={<RegisterForm setAuthenticated={setAuthenticated} />}
            />

            <Route
              path="gigs/search"
              element={<GigListings isVenue={false} />}
            />
            <Route path="/guest-view/:id" element={<GuestView />} />
            <Route path="gigs/view/:gigId" element={<GigPage />} />
            {authenticated ? (
              <>
                <Route
                  path="gigs/add"
                  element={<CreateGigForm venueId={venueId} />}
                />
                <Route
                  path="/venue-dashboard"
                  element={<VenueUserDashboard venueId={venueId} />}
                />
                <Route path="/edit-venue/:id" element={<VenueEdit />} />
                <Route path="/add-venue" element={<VenueAdd />} />
                <Route
                  path="logout"
                  element={<Logout setAuthenticated={setAuthenticated} />}
                />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" replace />} />
            )}
          </Route>
        </Routes>
      </Router>
      <div>
                  <h1>Review Application</h1>
                  <ReviewForm addReview={addReview} />
                  <ReviewList reviews={reviews} />
              </div>
    </>
  );
}

export default App;
