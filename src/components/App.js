import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/app.css";
import AddProperty from "./AddProperty";
import Navbar from "./Navbar";
import Properties from "./Properties";

function App() {

  const [ userID, setUserID ] = useState("");
  let accessToken = "";

  const handleLogin = (response) => {
    console.log(response);
    setUserID(response.userID);
    accessToken = response.accessToken;
    }

  useEffect(() => {console.log(userID)}, [userID]);

  const handleLogout = () => {
    console.log(userID);
    window.FB.logout(() => {
      setUserID("")
    }, { access_token: accessToken });
  }

  return (
    <div>
      <Navbar onLogin={handleLogin} onLogout={handleLogout} userID={userID}/>
      <h2>Surreal Estate</h2>
      <Routes>
        <Route path="/" element={<Properties userID={userID} />} />
        <Route path="add-property" element={<AddProperty />} />
      </Routes>
    </div>
  );
}

export default App;
