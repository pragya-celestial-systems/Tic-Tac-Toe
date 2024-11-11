import React from "react";
import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";
import { TilesContextProvider } from "./context/TilesContext";
import { PlayerContextProvider } from "./context/PlayerContext";
import { SettingsContextProvider } from "./context/SettingsContext";

function App() {
  return (
    <SettingsContextProvider>
      <PlayerContextProvider>
        <TilesContextProvider>
          <Header />
          <Board />
          <Footer />
        </TilesContextProvider>
      </PlayerContextProvider>
    </SettingsContextProvider>
  );
}

export default App;
