import React, { useContext } from "react";
import "./styles/nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../App";

export const Nav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="nav" id={theme}>
      <div className="navTitle">
        <h1>Where in the world?</h1>
      </div>
      <div className="navLogo">
        <p onClick={toggleTheme}>
          {" "}
          <span>
            <FontAwesomeIcon icon={faMoon} />
          </span>{" "}
          Dark mode
        </p>
      </div>
    </div>
  );
};
