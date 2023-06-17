import React, { useEffect, useState, createContext } from "react";

import "./App.scss";

import Header from "./component/Header/Header";
import Followers from "./component/Followers/Followers";
import Overview from "./component/Overview/Overview";
import { followData, overviewData } from "./data/data";

export const themeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("selectedTheme") || "dark"
  );

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", theme);
    document.querySelector(".toggler").classList.add(theme);

    localStorage.setItem("selectedTheme", theme);

    return () => {
      document.querySelector(".toggler").classList.remove(theme);
    };
  }, [theme]);

  return (
    <themeContext.Provider value={{ toggleTheme, theme }}>
      <div className="App">
        <div className="top-bg"></div>
        <Header />
        <div className="grid">
          {followData.map((item) => {
            return (
              <Followers
                key={item.id}
                title={item.id}
                name={item.name}
                arrow={item.arrow}
                follower={item.followers}
                today={item.today}
                icon={item.icon}
              />
            );
          })}
        </div>
        <h2 className="overview-heading">Overview - Today</h2>
        <div className="grid">
          {overviewData.map((item) => {
            return (
              <Overview
                key={item.id}
                name={item.name}
                title={item.title}
                arrow={item.arrow}
                count={item.count}
                percent={item.percent}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>
    </themeContext.Provider>
  );
}

export default App;
