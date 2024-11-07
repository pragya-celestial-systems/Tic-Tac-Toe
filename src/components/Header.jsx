import React from "react";
import "./css/header.css";
import { usePlayerContext } from "../customHooks/PlayerContext";

function Navbar() {
  const { winner, currentPlayer } = usePlayerContext();

  return (
    <div id="nav">
      <button className="btn">
        <i className="fa-solid fa-bars"></i>
      </button>
      <div id="currentPlayer">
        {winner ? `${winner} won the game! 🎉` : currentPlayer}
      </div>
      <button className="btn">
        <i className="fa-solid fa-gear"></i>
      </button>
    </div>
  );
}

export default Navbar;
