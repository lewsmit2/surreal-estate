import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/app.css";
import AddProperty from "./AddProperty";
import Navbar from "./Navbar";
import Properties from "./Properties";

function App() {
  return (
    <div>
      <Navbar />
      <h2>Surreal Estate</h2>
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="add-property" element={<AddProperty />} />
      </Routes>
    </div>
  );
}

export default App;
