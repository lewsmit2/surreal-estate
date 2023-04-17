import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/sidebar.css";

const Sidebar = () => {



  return (
    <div className="sidebar">
        <h2 className="sidebar__title">Cities</h2>
        <ul className="sidebar__list">
            <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
            <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
            <Link to={`/?query={"city": "Sheffield"}`}>Sheffield</Link>
            <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
        </ul>
    </div>
  )
}

export default Sidebar