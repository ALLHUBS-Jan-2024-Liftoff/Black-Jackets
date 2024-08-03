import { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VenueList from "./pages/VenueList";
import GigPage from "./pages/GigPage";
import CreateGigForm from "./components/CreateGig";

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Home />
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route
              index
              element={
                <Home
                  username={username}
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                />
              }
            />
            <Route path="about" element={<About />} />
            <Route
              path="login"
              element={
                <LoginPage
                  setLoggedIn={setLoggedIn}
                  setUsername={setUsername}
                />
              }
            />
            <Route path="register" element={<RegisterPage />} />
            {/* <Route path="contact" element={<Contact />} /> */}
            <Route path="gigs/add" element={<CreateGigForm />} />
          </Route>
        </Routes>
      </Router>
      <VenueList />
    </>
  );
}

export default App;
