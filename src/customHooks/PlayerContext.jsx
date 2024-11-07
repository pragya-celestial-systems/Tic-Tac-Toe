import React, { createContext, useContext, useState } from "react";

const playerContext = createContext();

export function PlayerContextProvider({ children }) {
  const [winner, setWinner] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState("O Player");

  return (
    <playerContext.Provider
      value={{ winner, setWinner, currentPlayer, setCurrentPlayer }}
    >
      {children}
    </playerContext.Provider>
  );
}

export function usePlayerContext() {
  return useContext(playerContext);
}
