import { useState } from 'react';
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from './pages/About'
import RegisterPage from './pages/RegisterPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VenueList from './pages/VenueList'

function App() {
  const [count, setCount] = useState(0)

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
          </Route>
        </Routes>
      </Router>
      <VenueList />
    </>
  );
}

export default App;
