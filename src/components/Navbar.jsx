import React from "react";
import "./css/navbar.css";

function Navbar() {
  return (
    <div id="nav">
      <button className="btn">
        <i className="fa-solid fa-bars"></i>
      </button>
      <div id="currentPlayer">⭕️ Player 1</div>
      <button className="btn">
        <i className="fa-solid fa-gear"></i>
      </button>
    </div>
  );
}

export default Navbar;
