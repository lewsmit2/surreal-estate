import React from 'react'
import { Link } from "react-router-dom";
import "../styles/navbar.css"
import logo from "../assets/surreal-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
            <img src={logo} alt="Surreal Logo" className="logo-image" />
        </div>
        <ul className="navbar-links">
            <li className="navbar-links-list-item">
                <Link className="item" to="/">View Properties</Link>
            </li>
            <li className="navbar-links-list-item">
                <Link className="item" to="add-property">Add a Property</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar