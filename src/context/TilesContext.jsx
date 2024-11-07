import React, { createContext, useContext, useState } from "react";

const tilesContext = createContext();

export function TilesContextProvider({ children }) {
  const [tiles, setTiles] = useState(0);

  return (
    <tilesContext.Provider value={{ tiles, setTiles }}>
      {children}
    </tilesContext.Provider>
  );
}

export function useTilesContext() {
  return useContext(tilesContext);
}
