/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "",
      bedroom: "",
      bathroom: "",
      email: "",
      price: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    axios
      .post(`/PropertyListing`, {fields})
      .then((response) => {
       console.log(response)
      })
      .catch((error) => {
        console.log(error);
      })
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <h2 style={{ marginBottom: "20px" }}>Add Property Page</h2>
      <form onSubmit={handleAddProperty}>
        <div className="form-field">
          <label htmlFor="title">
            Title
            <input
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            ></input>
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="type">
            Type
          <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detatched">Detatched</option>
              <option value="Semi-Detatched">Semi-Detatched</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="bedrooms">
            Bedrooms
            <input
              id="bedroom"
              name="bedroom"
              placeholder="Number of Bedrooms"
              value={fields.bedroom}
              onChange={handleFieldChange}
            ></input>
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="bathroom">
            Bathrooms
            <input
              id="bathroom"
              name="bathroom"
              placeholder="Number of Bathrooms"
              value={fields.bathroom}
              onChange={handleFieldChange}
            ></input>
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="price">
            Price
            <input
              id="price"
              name="price"
              placeholder="Price of Property"
              value={fields.price}
              onChange={handleFieldChange}
            ></input>
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="city">
            City
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="email">
            Emails
            <input
              id="email"
              name="email"
              placeholder="john.smith@email.co.uk"
              value={fields.email}
              onChange={handleFieldChange}
            ></input>
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
