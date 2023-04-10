/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/add-property.css";

const AddProperty = () => {

  const initialState = {
    fields: {
    bedrooms: "",
    bathrooms: "",
    city: "",
    email: "",
    title: "",
    type: ""
    },
};

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name] : event.target.value });
  };

  return (
    <div className="add-property">
        <h2 style={{ marginBottom: "20px" }}>Add Property Page</h2>
        <form onSubmit={handleAddProperty}>
            <div className="form-field">
                <label htmlFor="bathrooms">
                    Bathrooms:
                    <input
                    id="bathrooms"
                    name="bathrooms"
                    placeholder="Number of Bathrooms"
                    value={fields.bathrooms}
                    onChange={handleFieldChange}
                    >
                    </input>
                </label>
            </div>
            <div className="form-field">
                <label htmlFor="bedrooms">
                    Bedrooms:
                    <input
                    id="bedrooms"
                    name="bedrooms"
                    placeholder="Number of Bedrooms"
                    value={fields.bedrooms}
                    onChange={handleFieldChange}
                    >      
                    </input>
                </label>
            </div>
            <div className="form-field">
                <label htmlFor="city">
                    City:
                    <select 
                        id="city" 
                        name="city" 
                        value={fields.city} 
                        onChange={handleFieldChange}>
                        <option value="Manchester">Manchester</option>
                        <option value="Leeds">Leeds</option>
                        <option value="Sheffield">Sheffield</option>
                        <option value="Liverpool">Liverpool</option>
                    </select>
                </label>
            </div>
            <div className="form-field">
                <label htmlFor="email">
                    Email:
                    <input
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={fields.email}
                    onChange={handleFieldChange}
                    >
                    </input>
                </label>
            </div>
            <div className="form-field">
                <label htmlFor="title">
                    Title:
                    <input 
                        id="title"
                        name="title"
                        placeholder="Title"
                        value={fields.title}
                        onChange={handleFieldChange}
                    />
                </label>
            </div>
            <div className="form-field">
                <label htmlFor="type">
                    Type:
                    <select
                    id="type"
                    name="type"
                    value={fields.type}
                    onChange={handleFieldChange}>
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
                <button type="submit">Add</button>
        </form>
    </div>
  );
};

export default AddProperty;
