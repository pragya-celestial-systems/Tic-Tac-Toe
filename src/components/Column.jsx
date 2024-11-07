import React from "react";
import "./css/column.css";

function Column({ symbol, onClick }) {
  return (
    <div className="column" onClick={() => onClick()}>
      {symbol}
    </div>
  );
}

export default Column;
