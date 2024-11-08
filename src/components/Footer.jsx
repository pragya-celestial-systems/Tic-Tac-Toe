import React, { useEffect } from "react";
import "./css/footer.css";
import { useTilesContext } from "../customHooks/TilesContext";
import { usePlayerContext } from "../customHooks/PlayerContext";

function Footer() {
  const { tilesCount } = useTilesContext();
  const {
    player1WinCount,
    player2WinCount,
    setPlayer1WinCount,
    setPlayer2WinCount,
  } = usePlayerContext();

  useEffect(() => {
    setPlayer1WinCount(Number(sessionStorage.getItem("player1WinCount")) || 0);
    setPlayer2WinCount(Number(sessionStorage.getItem("player2WinCount")) || 0);
  }, []);

  return (
    <footer id="footer">
      <div className="box">
        <div className="score">{player1WinCount}</div>
        <div className="player-name">⭕️ Player 1</div>
      </div>
      <div className="box">
        <div id="filledTilesCount">{tilesCount}</div>
        <div id="tilesHeading">Tiles</div>
      </div>
      <div className="box">
        <div className="score">{player2WinCount}</div>
        <div className="player-name">❌ Player 2</div>
      </div>
    </footer>
  );
}

export default Footer;
