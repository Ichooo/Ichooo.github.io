import React, { useState } from "react";
import "./styles//styles.css";
import Nav from "./components/Nav";
import AboutMe from "./components/pages/AboutMe";
import PageSwitcher from "./components/PageSwitcher";
import Portfolio from "./components/pages/Portfolio";
import Commitments from "./components/pages/Commitments";
import SocialIcons from "./components/SocialIcons";
import { Route, BrowserRouter as Router } from "react-router-dom";
import ReactGA from "react-ga";

const App = () => {
  ReactGA.initialize("UA-151646007-1");
  ReactGA.pageview(window.location.pathname + window.location.search);

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Router>
      <div className="App">
        <Nav />
        <SocialIcons />
        <PageSwitcher currPage={currentPage} setCurrPage={setCurrentPage} />
        <div className="main">
          <Route path="/" component={AboutMe} />
          <Route path="/" component={Portfolio} />
          <Route path="/" component={Commitments} />
        </div>
      </div>
    </Router>
  );
};

export default App;
