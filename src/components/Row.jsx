/* eslint-disable react/prop-types */
import React from "react";
import Column from "./Column";

function Row({ cells, onClick }) {
  return (
    <div className="row">
      {cells.map((cell, index) => (
        <Column key={index} symbol={cell} onClick={(cell) => onClick(cell)} />
      ))}
    </div>
  );
}

export default Row;
