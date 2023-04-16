import axios from "axios";
import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";

const Properties = () => {

  const [properties, setProperties] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [alert, setAlert] = useState({message: ""});

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/PropertyListing`)
    .then(( response ) => setProperties(response.data))
    .catch((error) => {
      console.error(error);
      setAlert({ message: "An error occurred while fetching properties." });
    });
  }, []);

  const propertyCardMap = properties.map((property) => (
    <div key={property.id} className="item">
    <PropertyCard key={property._id} props={property} />
    </div>
  ));

  return (
    <>
      {alert.message && <Alert message={alert.message} />}
        <div className="properties-header">Properties Page</div>
        <div className="properties-container">{propertyCardMap}</div>
    </>
  );
};

export default Properties;
