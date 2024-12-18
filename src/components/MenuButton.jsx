import React, { useEffect, useState } from "react";
import "./css/menuButton.css";
import { useTilesContext } from "../context/TilesContext";
import { usePlayerContext } from "../context/PlayerContext";

function MenuButton() {
  const { setTiles, setTilesCount } = useTilesContext();
  const { setPlayer1WinCount, setPlayer2WinCount } = usePlayerContext();
  const [menuClass, setMenuClass] = useState("unactive-menubar");

  useEffect(() => {
    function handleClick(e) {
      const menuButton = document.querySelector(".menu-button");
      const menuSidebar = document.querySelector(".menu-bar");

      if (
        e.target.closest("button") !== menuButton &&
        e.target.closest(".menu-bar") !== menuSidebar
      ) {
        setMenuClass("unactive-menubar");
      }
    }

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  function handleDisplaySidebar() {
    setMenuClass("active-menubar");
  }

  function handleHideSidebar() {
    setMenuClass("unactive-menubar");
  }

  function handleResetGame() {
    setTiles(Array(9).fill(null));
    setTilesCount(0);
    sessionStorage.removeItem("player1WinCount");
    sessionStorage.removeItem("player2WinCount");
    setPlayer1WinCount(0);
    setPlayer2WinCount(0);
  }

  return (
    <>
      <button
        className="menu-button"
        id="menuButton"
        onClick={handleDisplaySidebar}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className={`menu-bar ${menuClass}`}>
        <div id="closeButtonContainer" onClick={handleHideSidebar}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <hr style={{ width: "90%" }} />
        <div className="menu-sidebar-row">
          <span onClick={handleResetGame}>Reset Game</span>
        </div>
      </div>
    </>
  );
}

export default MenuButton;
