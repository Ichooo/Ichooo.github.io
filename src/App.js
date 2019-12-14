import React from "react";
import "./styles//styles.css";

import { Route, BrowserRouter as Router } from "react-router-dom";
import ReactGA from "react-ga";
import LandingPage from "./components/pages/LandingPage";

const App = () => {
  ReactGA.initialize("UA-151646007-1");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <Router>
      <div className="App">
        <Route path="/" component={LandingPage} />
      </div>
    </Router>
  );
};

export default App;
