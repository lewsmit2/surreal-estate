import React from 'react'
import "../styles/navbar.css"
import logo from "../assets/surreal-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
            <img src={logo} alt="Surreal Logo" className="logo-image" />
        </div>
        <ul className="navbar-links">
            <li><a href="https://google.com">View Properties</a></li>
            <li><a href="https://google.com">Add a Property</a></li>
        </ul>
    </nav>
  )
}

export default Navbar