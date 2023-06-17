import React from "react";
import "./Followers.scss";

const Followers = ({ title, name, arrow, follower, today, icon }) => {
  return (
    <div className={`card ${title}`}>
      <div className="social">
        <img src={icon} alt="social icon" />
        <span className="handle">{name}</span>
      </div>
      <h2 className="follow-count">{follower}</h2>
      <span className="follower">followers</span>
      <div className="count">
        <img src={arrow} alt="arrow" />
        <span>{today} Today</span>
      </div>
    </div>
  );
};

export default Followers;
