import React, { useState, useEffect, useRef } from "react";

import Nav from "../Nav";
import Modal from "../Modal";
import Welcome from "./Weclome";
import AboutMe from "./AboutMe";
import PageSwitcher from "../PageSwitcher";
import Projects from "./Projects";
import Commitments from "./Commitments";
import SocialIcons from "../SocialIcons";

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [modalContent, setModalContent] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modal = document.getElementById("myModal");

  const toggleModal = content => {
    setModalContent(content);
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="landing">
      <Nav />

      <PageSwitcher currPage={currentPage} setCurrPage={setCurrentPage} />
      <div className="main">
        <Modal
          modalIsOpen={modalIsOpen}
          modalContent={modalContent}
          setModalIsOpen={setModalIsOpen}
        />
        <Welcome />
        <AboutMe />
        <Projects toggleModal={toggleModal} />
        <Commitments toggleModal={toggleModal} />
      </div>
    </div>
  );
};

export default LandingPage;
