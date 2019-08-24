import React from 'react';
import '../styles//styles.css';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import PageSwitcher from './components/PageSwitcher';


const App = () => {
    return (
      <div className="App">
        <Nav />
        <div className="main">
          <AboutMe />
          <PageSwitcher />
        </div>
      </div>
    );
}

export default App;
