import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const wrapperRef = React.createRef();

  const toggleNav = () => {
    const wrapper = wrapperRef.current;
    wrapper.classList.toggle("is-nav-open");
  };

  const handleClick = page => {
    if (page != 0) toggleNav();
    switch (page) {
      case 0:
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case 1:
        document
          .querySelector(".about-me-container")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case 2:
        document
          .querySelector(".projects")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case 3:
        document
          .querySelector(".commitments")
          .scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <nav>
      <h3 ref={wrapperRef} className="logo" onClick={() => handleClick(0)}>
        Pontus Arnesson
      </h3>

      <div ref={wrapperRef} className="wrapper">
        <div className="nav-box">
          <div className="menu-item" onClick={() => handleClick(1)}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="white" />
            </svg>
            <h4>About me</h4>
          </div>
          <div className="menu-item" onClick={() => handleClick(2)}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="white" />
            </svg>
            <h4>Projects</h4>
          </div>
          <div className="menu-item" onClick={() => handleClick(3)}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="white" />
            </svg>
            <h4>Commitments</h4>
          </div>
        </div>
      </div>

      <svg
        onClick={() => toggleNav()}
        className="menu"
        width="43"
        height="23"
        viewBox="0 0 43 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="1.5" x2="43" y2="1.5" stroke="#ebebeb" strokeWidth="3" />
        <line y1="11.5" x2="43" y2="11.5" stroke="#ebebeb" strokeWidth="3" />
        <line y1="21.5" x2="43" y2="21.5" stroke="#ebebeb" strokeWidth="3" />
      </svg>
    </nav>
  );
};

export default Nav;
