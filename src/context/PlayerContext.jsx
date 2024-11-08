import React, { createContext, useContext, useEffect, useState } from "react";

const playerContext = createContext();

export function PlayerContextProvider({ children }) {
  const [winner, setWinner] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState("⭕️");
  const [player1WinCount, setPlayer1WinCount] = useState(0);
  const [player2WinCount, setPlayer2WinCount] = useState(0);

  useEffect(() => {
    const num = Math.floor(Math.random() * 2);
    setCurrentPlayer(() => (num === 0 ? "⭕️" : "❌"));
  }, []);

  return (
    <playerContext.Provider
      value={{
        winner,
        setWinner,
        currentPlayer,
        setCurrentPlayer,
        player1WinCount,
        setPlayer1WinCount,
        player2WinCount,
        setPlayer2WinCount,
      }}
    >
      {children}
    </playerContext.Provider>
  );
}

export function usePlayerContext() {
  return useContext(playerContext);
}
