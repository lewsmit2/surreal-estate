import React, {useState} from 'react';
import  {useLocation, Link, useNavigate} from "react-router-dom";
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
            [operation]: JSON.stringify({
                ...JSON.parse(currentQueryParams[operation] || "{}"),
                ...valueObj,
            }),
            };
            return qs.stringify(newQueryParams, {
                addQueryPrefix: true, 
                encode: false});
        }

    const [ query, setQuery ] = useState("");

    const navigate = useNavigate();

    const handleSearch = event => {
        event.preventDefault();

        const newQueryString = buildingQueryString("query", { title: { $regex: query } });
        navigate(newQueryString);
    }



  return (
    <div className="sidebar">
        <form onSubmit={handleSearch}>
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
    </form>
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