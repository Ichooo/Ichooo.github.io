import React from "react";
import meImg from "../../img/me.jpg";
import SocialIcons from "../SocialIcons";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="profile-pic-border">
        <img className="me-img" src={meImg} alt="Me"></img>
      </div>
      <h3 className="section-title">Welcome</h3>
      <p className="about-me-text">
        {" "}
        Hi and welcome to my site! Here you will find a little about me, what I
        have done previously and whats comming ahead!
      </p>
      <SocialIcons />
    </div>
  );
};

export default Welcome;
