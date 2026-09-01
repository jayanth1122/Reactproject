import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      {/* <a href="#">Link</a> */}
      {/* or */}

      <Link to="/Home">Home</Link>
      <br />
      <Link to="/About">About</Link>
      <br />
      <Link to="/Contact">Contact</Link>
    </div>
  )
}
