import { useState } from 'react';
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from './pages/About'
import LoginPage from "./pages/LoginPage";
import RegisterPage from './pages/RegisterPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import VenueList from './pages/VenueList'
import GigPage from "./pages/GigPage";
import CreateGigForm from "./components/CreateGig";
import api from "./services/TokenService"; 
import VenueAdd from './pages/VenueAdd'
import GigListings from "./components/GigListings";

function App() {
  // checking for token when loading
  const token = localStorage.getItem("token");
  if (token) {
    api(token);
  }
  

  // venueId will be set to the venueId related to the logged in user
  const [venueId, setVenueId] = useState(1);




  return (
    // <Home />
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="about" element={<About />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            {/* <Route path="/venue-list" element={<VenueList />} /> */}
            <Route path="/add-venue" element={<VenueAdd />} />
            <Route
              path="gigs/add"
              element={<CreateGigForm venueId={venueId} />}
            />
            <Route
              path="gigs/search"
              element={<GigListings isVenue={false} />}
            />
          </Route>
        </Routes>
      </Router>
      {/* <VenueList /> */}
      {/* <VenuePage /> */}
    </>
  );
}

export default App;
