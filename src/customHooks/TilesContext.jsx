import React, { createContext, useContext, useState } from "react";

const tilesContext = createContext();

export function TilesContextProvider({ children }) {
  const [tilesCount, setTilesCount] = useState(0);

  return (
    <tilesContext.Provider value={{ tilesCount, setTilesCount }}>
      {children}
    </tilesContext.Provider>
  );
}

export function useTilesContext() {
  return useContext(tilesContext);
}
