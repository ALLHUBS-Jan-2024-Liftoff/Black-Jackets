import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
 
  return (
    // <Home />
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          </Route>
        </Routes>
    </Router>
  )
}

export default App
