import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import "../styles/navbar.css";
import logo from "../assets/surreal-logo.png";

const Navbar = ({onLogin, onLogout, userId}) => {
  const handleLogout = () => {
    window.FB.logout(() => {
      onLogout();
    });
  };

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
        { userId ? (
          <li className="navbar-links-list-item">
            <button className="button" type="button" onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : (
        <li className="navbar-links-list-item">
          <FacebookLogin
            appId="737898181346973"
            autoLoad={true}
            fields="name,email,picture"
            callback={onLogin}
            render={(renderProps) => (
              <button
              className="button"
              type="button"
              onClick={renderProps.onClick}
              >
                Login
              </button>
            )}
            onLogin={onLogin}
        
          />
        </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
