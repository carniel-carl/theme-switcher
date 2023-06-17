import React from "react";
import "./Overview.scss";

const Overview = ({ name, arrow, count, percent, icon, title }) => {
  return (
    <div className={`overview ${title}`}>
      <div className="top">
        <span className="action">{name}</span>
        <img src={icon} alt="social icon" />
      </div>
      <div className="bottom">
        <h3>{count}</h3>
        <div className="percent">
          <img src={arrow} alt="arrow" />
          <span>{percent}%</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
