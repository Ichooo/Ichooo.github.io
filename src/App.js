import React, { useState } from "react";
import "./styles//styles.css";
import Nav from "./components/Nav";
import AboutMe from "./components/pages/AboutMe";
import PageSwitcher from "./components/PageSwitcher";
import Portfolio from "./components/pages/Portfolio";
import Commitments from "./components/pages/Commitments";
import SocialIcons from "./components/SocialIcons";
import Modal from "./components/Modal";
import { Route, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [modalDetails, setModalDetails] = useState({ isOpen: false, index: 0 });

  return (
    <Router>
      <div className="App">
        <Nav />
        <SocialIcons />
        <PageSwitcher currPage={currentPage} setCurrPage={setCurrentPage} />
        <div className="main">
          <Route path="/" component={AboutMe} />
          <Route
            path="/"
            render={props => (
              <Portfolio
                {...props}
                setModalDetails={setModalDetails}
                modalDetails={modalDetails}
              />
            )}
          />
          <Route path="/" component={Commitments} />
          <Route
            path="/"
            render={props => (
              <Modal
                {...props}
                setModalDetails={setModalDetails}
                modalDetails={modalDetails}
              />
            )}
          />
        </div>
      </div>
    </Router>
  );
};

export default App;
