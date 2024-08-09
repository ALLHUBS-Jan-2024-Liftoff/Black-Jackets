import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Navbar() {
  return (
      <>
          <nav>
              <ul className="nav nav-pills flex-column flex-sm-row">
                  <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/about">About</Link>
                  </li>
                  {/* <li className="nav-item">
                      <Link className="nav-link" to="/venue-list">Venue List</Link>
                  </li> */}
                  <li className="nav-item">
                      <Link className="nav-link" to="/add-venue">Create Venue</Link>
                  </li>
              </ul>
          </nav>
          <Outlet />
      </>
  )
}

export default Navbar