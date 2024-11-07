import "./App.css";
import Navbar from "./components/Navbar";
import Board from "./components/Board";
import Footer from "./components/Footer";
import { TilesContextProvider } from "./context/TilesContext";

function App() {
  return (
    <TilesContextProvider>
      <Navbar />
      <Board />
      <Footer />
    </TilesContextProvider>
  );
}

export default App;
