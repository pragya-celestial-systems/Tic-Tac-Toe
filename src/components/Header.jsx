import React from "react";
import MenuButton from "./MenuButton";
import { usePlayerContext } from "../context/PlayerContext";
import "./css/header.css";
import SettingsButton from "./SettingsButton";

function Header() {
  const { winner, currentPlayer } = usePlayerContext();

  return (
    <div id="nav">
      <MenuButton />
      <div id="currentPlayer">
        {winner
          ? `${winner === "⭕️" ? "Player 1" : "Player 2"} won the game! 🎉`
          : `${currentPlayer} Turn`}
      </div>
      <SettingsButton />
    </div>
  );
}

export default Header;
