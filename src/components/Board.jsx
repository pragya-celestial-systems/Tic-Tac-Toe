import React from "react";
import Column from "./Column";
import "./css/board.css";

function Board() {
  return (
    <div id="container">
      <main id="board">
        <div className="row">
          <Column columnIndex="0-0" />
          <Column columnIndex="0-1" />
          <Column columnIndex="0-2" />
        </div>
        <div className="row">
          <Column columnIndex="1-0" />
          <Column columnIndex="1-1" />
          <Column columnIndex="1-2" />
        </div>
        <div className="row">
          <Column columnIndex="2-0" />
          <Column columnIndex="2-1" />
          <Column columnIndex="2-2" />
        </div>
      </main>
    </div>
  );
}

export default Board;
