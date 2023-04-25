import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import "../styles/navbar.css";
import logo from "../assets/surreal-logo.png";

const Navbar = ({onLogin, onLogout, userID}) => {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Surreal Logo" className="logo-image" />
      </div>
      <ul className="navbar-links">
        <li className="navbar-links-list-item">
          <Link className="item" to="/">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-list-item">
          <Link className="item" to="add-property">
            Add a Property
          </Link>
        </li>
        <li className="navbar-links-list-item">
          <Link className="item" to="favourite">
            Favourite Properties
          </Link>
        </li>
        { userID ? (
          <li className="navbar-links-list-item">
            <button className="item" type="submit" onClick={onLogout}>
              Logout
            </button>
          </li>
        ) : (
        <li className="navbar-links-list-item">
          <FacebookLogin
            appId="737898181346973"
            autoLoad
            fields="name,email,picture"
            callback={onLogin}
            textButton="Login"
           />
        </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
