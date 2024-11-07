import React from "react";
import "./css/footer.css";
import { useTilesContext } from "../context/TilesContext";

function Footer() {
  const { tiles } = useTilesContext();

  return (
    <footer id="footer">
      <div className="box">
        <div className="score">0</div>
        <div className="player-name">⭕️ Player 1</div>
      </div>
      <div className="box">
        <div id="filledTilesCount">{tiles}</div>
        <div id="tilesHeading">Tiles</div>
      </div>
      <div className="box">
        <div className="score">0</div>
        <div className="player-name">❌ Player 2</div>
      </div>
    </footer>
  );
}

export default Footer;
