import { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import RegisterForm from "./pages/Register";
import LoginForm from "./pages/Login";
import Logout from "./pages/Logout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VenueEdit from "./pages/VenueEdit";
// import VenueList from "./pages/VenueList";
import VenueUserDashboard from "./pages/VenueUserDashboard";
import GigPage from "./pages/GigPage";
import CreateGigForm from "./components/CreateGig";
import VenueAdd from './pages/VenueAdd'
import GigListings from "./components/GigListings";

function App() {
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
            <Route path="login" element={<LoginForm  />} />
            <Route path="register" element={<RegisterForm />} />
            {/* <Route path="/venue-list" element={<VenueList />} /> */}
            <Route path="/add-venue" element={<VenueAdd />} />
            <Route path="gigs/add"
              element={<CreateGigForm venueId={venueId} />}
            />
            <Route path="/venue-dashboard" element={<VenueUserDashboard venueId={venueId}/>} />
            <Route path="/edit-venue/:id" element={<VenueEdit />} />
            <Route path="gigs/search"
              element={<GigListings /*isVenue={false}*/ />}
            />
            <Route path="logout" element={<Logout />}
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
