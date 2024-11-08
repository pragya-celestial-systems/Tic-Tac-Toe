import React, { useEffect, useRef, useState } from "react";
import gameOverSound from "../assets/game-over-sound.mp3";
import plotSymbolSound from "../assets/plot-symbol-sound.mp3";
import Column from "./Column";
import Result from "./Result";
import "./css/board.css";
import { usePlayerContext } from "../customHooks/PlayerContext";
import { useTilesContext } from "../customHooks/TilesContext";

function Board() {
  const [tiles, setTiles] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [isXturn, setIsXturn] = useState(true);
  const {
    setCurrentPlayer,
    currentPlayer,
    setWinner,
    winner,
    setPlayer1WinCount,
    setPlayer2WinCount,
  } = usePlayerContext();

  const [hasFinished, setHasFinished] = useState(false);
  const { setTilesCount, tilesCount } = useTilesContext();
  const gameOverRef = useRef();
  const plotSymbolRef = useRef();

  useEffect(() => {
    // setIsXturn(currentPlayer === "⭕️ Player" ? true : false);
    console.log(currentPlayer === "⭕️ Turn" ? true : false);
    const winner = checkWinner();

    if (tilesCount >= 9 && !winner) {
      displayResult(winner);
      return;
    }

    if (winner) {
      displayResult(winner);
    }
  }, [tiles, setWinner]);

  function handleAddSymbol(index) {
    if (tiles[index] !== null || winner) return;

    // pause the sound if already playing
    if (plotSymbolRef.current.play) {
      plotSymbolRef.current.pause();
      plotSymbolRef.current.currentTime = 0;
    }

    plotSymbolRef.current.play();
    const updatedTiles = [...tiles];
    updatedTiles[index] = isXturn ? "❌" : "⭕️";
    setCurrentPlayer(() => (isXturn ? "⭕️" : "❌"));
    setTiles(updatedTiles);
    setTilesCount((prevTilesCount) => prevTilesCount + 1);
    setIsXturn((prevState) => !prevState);
  }

  function checkWinner() {
    const winnerConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let winner = null;
    winnerConditions.forEach((condition) => {
      const [col1, col2, col3] = condition;
      if (
        tiles[col1] &&
        tiles[col1] === tiles[col2] &&
        tiles[col2] === tiles[col3]
      ) {
        winner = tiles[col1];
      }
    });

    return winner;
  }

  function displayResult(winner) {
    if (winner === "⭕️") {
      setPlayer1WinCount((prevCount) => prevCount + 1);
    }

    if (winner === "❌") {
      setPlayer2WinCount((prevCount) => prevCount + 1);
    }

    gameOverRef.current.play();
    setTimeout(() => {
      setWinner(winner);
      setHasFinished(true);
    }, 500);

    // save the winner in the session storage
    saveWinner(winner);
  }

  function saveWinner(winner) {
    const player1WinCount = Number(sessionStorage.getItem("player1WinCount"));
    const player2WinCount = Number(sessionStorage.getItem("player2WinCount"));
    console.log(winner);

    if (winner === "⭕️") {
      sessionStorage.setItem("player1WinCount", player1WinCount + 1);
    } else {
      sessionStorage.setItem("player2WinCount", player2WinCount + 1);
    }
  }

  function handleClickPlayAgain() {
    setWinner(null);
    setTiles([null, null, null, null, null, null, null, null, null]);
    setTilesCount(0);
    setHasFinished(false);
    gameOverRef.current.pause();
  }

  return (
    <>
      <div id="container">
        <audio
          src={gameOverSound}
          style={{ display: "none" }}
          ref={gameOverRef}
        ></audio>
        <audio
          src={plotSymbolSound}
          style={{ display: "none" }}
          ref={plotSymbolRef}
        ></audio>
        <main id="board">
          <div className="row">
            <Column symbol={tiles[0]} onClick={() => handleAddSymbol(0)} />
            <Column symbol={tiles[1]} onClick={() => handleAddSymbol(1)} />
            <Column symbol={tiles[2]} onClick={() => handleAddSymbol(2)} />
          </div>
          <div className="row">
            <Column symbol={tiles[3]} onClick={() => handleAddSymbol(3)} />
            <Column symbol={tiles[4]} onClick={() => handleAddSymbol(4)} />
            <Column symbol={tiles[5]} onClick={() => handleAddSymbol(5)} />
          </div>
          <div className="row">
            <Column symbol={tiles[6]} onClick={() => handleAddSymbol(6)} />
            <Column symbol={tiles[7]} onClick={() => handleAddSymbol(7)} />
            <Column symbol={tiles[8]} onClick={() => handleAddSymbol(8)} />
          </div>
        </main>
      </div>
      {hasFinished && <Result onPlayAgain={handleClickPlayAgain} />}
    </>
  );
}

export default Board;
