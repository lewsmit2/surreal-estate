import React from 'react';
import  {useLocation, Link} from "react-router-dom";
import qs from "qs";
import "../styles/sidebar.css";

const Sidebar = () => {

    const { search } = useLocation();

    const buildingQueryString = (operation, valueObj) => {

        const currentQueryParams = qs.parse(search, { 
            ignoreQueryPrefix: true 
        });

        const newQueryParams = {
            ...currentQueryParams,
            [operation]: JSON.stringify(valueObj)
            }
            return qs.stringify(newQueryParams, {
                addQueryPrefix: true, 
                encode: false});
        }

  return (
    <div className="sidebar">
        <h2 className="sidebar__title">Cities</h2>
        <ul className="sidebar__list">
            <Link to={buildingQueryString("query", { city: "Manchester"})}>Manchester</Link>
            <Link to={buildingQueryString("query", { city: "Leeds"})}>Leeds</Link>
            <Link to={buildingQueryString("query", { city: "Sheffield"})}>Sheffield</Link>
            <Link to={buildingQueryString("query", { city: "Liverpool"})}>Liverpool</Link>
        </ul>
        <h2 className="sidebar__title">By Price</h2>
        <ul className="sidebar__list">
            <Link to={buildingQueryString("sort", { price: 1 })}>Sort Price Ascending</Link>
            <Link to={buildingQueryString("sort", { price: -1 })}>Sort Price Descending</Link>
        </ul>
    </div>
  )
}

export default Sidebar