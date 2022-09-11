import React from "react";
import "../assets/styles/style.css";

import Home from "../assets/img/home.png";
import Navbar from "../components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="home"></div>
      </div>
    </>
  );
}

export default App;
