import { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VenueList from "./pages/VenueList";
import GigPage from "./pages/GigPage";
import CreateGigForm from "./components/CreateGig";

function App() {
  // venueId will be set to the venueId related to the logged in user
  const [venueId, setVenueId] = useState(1);
  const genreList = ["Rock", "Rap", "Hip-Hop", "Jazz", "Country", "Blues", "Metal"];



  return (
    // <Home />
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="register" element={<RegisterPage />} />
            {/* <Route path="contact" element={<Contact />} /> */}
            <Route path="gigs/add" element={<CreateGigForm venueId={venueId} genreList={genreList}/>} />
          </Route>
        </Routes>
      </Router>
      <VenueList />
    </>
  );
}

export default App;
