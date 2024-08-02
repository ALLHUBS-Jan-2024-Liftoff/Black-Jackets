import { useState } from 'react';
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from './pages/About'
import RegisterPage from './pages/RegisterPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VenueList from './pages/VenueList'
import UploadForm from './components/UploadForm';
import Profile from './components/Profile';


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
const App = () => {
  const [videos, setVideos] = useState([]);

const handleVideoUpload = (videoId) => {
    setVideos((prevVideos) => [...prevVideos, { videoId }]);
  };

  return (
      <div>
        <UploadForm onVideoUpload={handleVideoUpload} />
        <Profile />
      </div>
    );
  };
export default App;
