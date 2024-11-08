import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";
import { TilesContextProvider } from "./customHooks/TilesContext";
import { PlayerContextProvider } from "./customHooks/PlayerContext";

function App() {
  return (
    <PlayerContextProvider>
      <TilesContextProvider>
        <Header />
        <Board />
        <Footer />
      </TilesContextProvider>
    </PlayerContextProvider>
  );
}

export default App;
