/* eslint-disable react/prop-types */
import React from "react";
import "./css/result.css";
import { usePlayerContext } from "../context/PlayerContext";

function Result({ onPlayAgain }) {
  const { winner } = usePlayerContext();

  return (
    <div id="overlay">
      <div id="resultContainer">
        {winner === "draw" ? (
          <h1 id="resultHeading">Match Draw!!!</h1>
        ) : (
          <h1 id="resultHeading">
            {winner
              ? winner === "⭕️"
                ? "⭕️ Player 1 won the match."
                : "❌ Player 2 won the match."
              : "Match Draw! No one won the game."}
          </h1>
        )}
        <button id="playAgainButton" onClick={() => onPlayAgain()}>
          Play again <i className="fa-solid fa-rotate-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Result;
