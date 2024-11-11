import React, { useEffect, useState } from "react";
import { useSettingsContext } from "../context/SettingsContext";
import "./css/settingsButton.css";

function SettingsButton() {
  const [settingsClass, setSettingsClass] = useState("unactive-sidebar");
  const { toggleAudio, setToggleAudio } = useSettingsContext();

  useEffect(() => {
    function handleClick(e) {
      const menuButton = document.querySelector("#settingsButton");
      const settingsSidebar = document.querySelector(".settings-bar");

      if (
        e.target.closest("button") !== menuButton &&
        e.target.closest(".settings-bar") !== settingsSidebar
      ) {
        setSettingsClass("unactive-sidebar");
      }
    }

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  function handleShowSidebar() {
    setSettingsClass("active-sidebar");
  }

  function handleHideSidebar() {
    setSettingsClass("unactive-sidebar");
  }

  function handleToggleAudio() {
    setToggleAudio((prevState) => !prevState);
  }

  return (
    <>
      <button id="settingsButton" onClick={handleShowSidebar}>
        <i className="fa-solid fa-gear"></i>
      </button>
      <div className={`settings-bar ${settingsClass}`}>
        <div id="closeButtonContainer" onClick={handleHideSidebar}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <hr style={{ width: "90%" }} />
        <div className="settings-sidebar-row">
          <div className="settings-sidebar-option" onClick={handleToggleAudio}>
            {toggleAudio ? (
              <i className="fa-regular fa-square-check"></i>
            ) : (
              <i className="fa-regular fa-square"></i>
            )}
            <span className="option">Mute Audio</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingsButton;
