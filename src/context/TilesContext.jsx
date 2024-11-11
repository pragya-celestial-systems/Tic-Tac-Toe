/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from "react";

const tilesContext = createContext();

export function TilesContextProvider({ children }) {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [tilesCount, setTilesCount] = useState(0);

  return (
    <tilesContext.Provider
      value={{ tiles, setTiles, tilesCount, setTilesCount }}
    >
      {children}
    </tilesContext.Provider>
  );
}

export function useTilesContext() {
  return useContext(tilesContext);
}
