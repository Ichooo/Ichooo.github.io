import React, { Component } from "react";
import mailLogo from "../logos/mail-logo-outline.png";
import fbLogo from "../logos/fb-logo.png";
import GHLogo from "../logos/github-logo-black.png";
import LinkedinLogo from "../logos/linkedin-logo.png";
import CVLogo from "../logos/cv-logo.png";

class SocialIcons extends Component {
  render() {
    return (
      <div className="social-cont">
        <a
          href="mailto:aresson.pontus@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="mail-log" src={mailLogo} alt="mail"></img>
        </a>
        <a
          href="https://www.facebook.com/pontus.arnesson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="fb-log" src={fbLogo} alt="facebook"></img>
        </a>
        <a
          href="https://github.com/arnessonpontus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="github-log" src={GHLogo} alt="github"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/pontus-arnesson-2a2212151/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="linkedin-log" src={LinkedinLogo} alt="linkedin"></img>
        </a>
        <a
          href="files/CV_2019_Pontus.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="cv-log" src={CVLogo} alt="cv"></img>
        </a>
      </div>
    );
  }
}

export default SocialIcons;
