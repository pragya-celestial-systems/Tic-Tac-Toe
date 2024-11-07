import React, { useState } from "react";
import "./css/column.css";
import { useTilesContext } from "../context/TilesContext";

function Column({ columnIndex }) {
  const { tiles, setTiles } = useTilesContext();

  function handleAddSymbol(e) {
    const player1 = "⭕️ Player 1";
    const player2 = "❌ Player 2";
    const tilesElement = document.querySelector("#filledTilesCount");

    if (tiles >= 9) {
      displayResult();
      return;
    }

    // get the clicked column
    const column = getColumn(e);

    // find the current player
    const { currentPlayer, currentPlayerSymbol } = getCurrentPlayer();

    if (column.getAttribute("class").includes("filled")) {
      alert("The column is already filled");
      return;
    }

    setTiles((prevTiles) => prevTiles + 1);
    plotSymbol(column, currentPlayerSymbol);

    // change the currentPlayer
    currentPlayer.textContent =
      currentPlayer.textContent == player1 ? player2 : player1;

    // add className="filled" so that user can't change the already filled symbol
    column.className = "column filled";
  }

  function plotSymbol(column, symbol) {
    column.textContent = symbol;
  }

  function getColumn(e) {
    const { columnIndex } = e.target.closest(".column").dataset;
    const column = document.querySelector(
      `.column[data-column-index="${columnIndex}"]`
    );

    return column;
  }

  function getCurrentPlayer() {
    const currentPlayer = document.querySelector("#currentPlayer");
    const currentPlayerSymbol = currentPlayer.textContent.slice(0, 1);

    return { currentPlayer, currentPlayerSymbol };
  }

  function displayResult() {
    // Todo : display the result
  }

  return (
    <div
      className="column"
      data-column-index={columnIndex}
      onClick={handleAddSymbol}
    ></div>
  );
}

export default Column;
