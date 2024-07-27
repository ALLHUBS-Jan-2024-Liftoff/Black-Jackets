import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VenueList from './pages/VenueList'
import VenueAdd from './pages/VenueAdd'

function App() {
 
  return (
    // <Home />
    <>
      <Router>
          <Routes>
          <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="about" element={<About />} />
          <Route path="/venue-list" element={<VenueList />} />
          <Route path="/add-venue" element={<VenueAdd />} />
        </Route>
        </Routes>
      </Router>
      {/* <VenueList /> */}
      {/* <VenuePage /> */}
      </>
  )
}

export default App
