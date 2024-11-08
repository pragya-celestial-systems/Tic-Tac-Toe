import React from "react";
import "./css/header.css";
import { usePlayerContext } from "../customHooks/PlayerContext";

function Header() {
  const { winner, currentPlayer } = usePlayerContext();

  return (
    <div id="nav">
      <button className="btn">
        <i className="fa-solid fa-bars"></i>
      </button>
      <div id="currentPlayer">
        {winner
          ? `${winner === "⭕️" ? "Player 1" : "Player 2"} won the game! 🎉`
          : `${currentPlayer} Turn`}
      </div>
      <button className="btn">
        <i className="fa-solid fa-gear"></i>
      </button>
    </div>
  );
}

export default Header;
