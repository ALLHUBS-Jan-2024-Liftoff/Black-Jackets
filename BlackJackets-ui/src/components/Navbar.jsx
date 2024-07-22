import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Navbar() {
  return (
      <>
          <nav>
              <ul class="nav nav-pills flex-column flex-sm-row">
                  <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li class="nav-item">
                      <Link class="nav-link" to="/about">About</Link>
                  </li>
              </ul>
          </nav>
          <Outlet />
      </>
  )
}

export default Navbar