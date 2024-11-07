import React, { useEffect, useState } from "react";
import Column from "./Column";
import "./css/board.css";
import { usePlayerContext } from "../customHooks/PlayerContext";

function Board() {
  const [tiles, setTiles] = useState([null, null, null, null, null, null, null, null, null]);
  const [isXturn, setIsXturn] = useState(true);
  const { setCurrentPlayer, setWinner, winner } = usePlayerContext();

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      setWinner(winner);
    }
  }, [tiles, setWinner]);

  function handleAddSymbol(index) {
    if (tiles[index] !== null || winner) return;

    const updatedTiles = [...tiles];
    updatedTiles[index] = isXturn ? "X" : "O";
    setCurrentPlayer(() => (isXturn ? "O Player" : "X Player"));
    setTiles(updatedTiles);
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

  return (
    <div id="container">
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
  );
}

export default Board;
