import React, { createContext, useContext, useState } from "react";

const settingsContext = createContext();

export function SettingsContextProvider({ children }) {
  const [toggleAudio, setToggleAudio] = useState(false);

  return (
    <settingsContext.Provider value={{ toggleAudio, setToggleAudio }}>
      {children}
    </settingsContext.Provider>
  );
}

export function useSettingsContext() {
  return useContext(settingsContext);
}
