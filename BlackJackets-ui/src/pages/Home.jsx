import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import VenueList from '../pages/VenueList'
import VenueAdd from './VenueAdd'

function Home() {
    return (
      <>
             <div>
              <h1>Welcome To Find A Gig Website!</h1>
          <p>This is the home page for our website.</p>
          {/* <VenueList />
            <Routes>
            <Route path="/" element={<VenueList />} />
            <Route path="/add-venue" element={<VenueAdd />} />
          </Routes> */}
        </div>
            </>
  )
}

export default Home