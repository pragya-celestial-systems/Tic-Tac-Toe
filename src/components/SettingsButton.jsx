import React, { useEffect, useState } from "react";
import { useSettingsContext } from "../context/SettingsContext";
import "./css/settingsButton.css";

function SettingsButton() {
  const [showSidebar, setShowSidebar] = useState(true);
  const { toggleAudio, setToggleAudio } = useSettingsContext();

  useEffect(() => {
    function handleClick(e) {
      const menuButton = document.querySelector("#settingsButton");
      if (e.target.closest("button") !== menuButton) {
        setShowSidebar(false);
      }
    }

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  function handleShowSidebar() {
    setShowSidebar(true);
  }

  function handleHideSidebar() {
    setShowSidebar(false);
  }

  function handleToggleAudio() {
    setToggleAudio((prevState) => !prevState);
  }

  return (
    <>
      <button id="settingsButton" onClick={handleShowSidebar}>
        <i className="fa-solid fa-gear"></i>
      </button>
      {showSidebar && (
        <div className="settings-bar">
          <div id="closeButtonContainer" onClick={handleHideSidebar}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <hr style={{ width: "90%" }} />
          <div className="settings-sidebar-row">
            {toggleAudio ? (
              <i className="fa-regular fa-square"></i>
            ) : (
              <i className="fa-regular fa-square-check"></i>
            )}
            <span onClick={handleToggleAudio}>Mute Audio</span>
          </div>
        </div>
      )}
    </>
  );
}

export default SettingsButton;
