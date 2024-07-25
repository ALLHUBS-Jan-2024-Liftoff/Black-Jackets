import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from './pages/About'
import LoginPage from './pages/LoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VenueList from './pages/VenueList'
import { useEffect, useState } from "react";

function App() {
 
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

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
                <LoginPage setLoggedIn={setLoggedIn} setUsername={setUsername} />
              }
            />
            {/* <Route path="contact" element={<Contact />} /> */}
          </Route>
        </Routes>
      </Router>
      <VenueList />
    </>
  );
}

export default App
