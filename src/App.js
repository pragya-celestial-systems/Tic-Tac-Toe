import "./App.css";
import Navbar from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";
import { TilesContextProvider } from "./customHooks/TilesContext";
import { PlayerContextProvider } from "./customHooks/PlayerContext";

function App() {
  return (
    <PlayerContextProvider>
      <TilesContextProvider>
        <Navbar />
        <Board />
        <Footer />
      </TilesContextProvider>
    </PlayerContextProvider>
  );
}

export default App;
