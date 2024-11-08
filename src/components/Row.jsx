import React from "react";
import Column from "./Column";

function Row({ cells, onClick }) {
  return (
    <div className="row">
      {cells.map((cell) => (
        <Column symbol={cell} onClick={(cell) => onClick(cell)} />
      ))}
    </div>
  );
}

export default Row;
