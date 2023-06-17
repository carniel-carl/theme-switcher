import React, { useContext } from "react";
import "./Header.scss";
import { themeContext } from "../../App";

const Header = () => {
  const { toggleTheme } = useContext(themeContext);

  return (
    <header>
      <div className="title">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>
      <div className="toggle">
        <span>Dark Mode</span>
        <div className="toggler" onClick={toggleTheme}>
          <span className="ball"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
