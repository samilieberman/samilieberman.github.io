import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home/Home';
import Education from './components/Education/Education';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import { Element } from "react-scroll";
import { Button } from 'react-bootstrap';
import { ButtonWrapper } from './styles';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Element name="home" className="element">
          <Home />
        </Element>
        <Element name="education" className="element">
          <Education />
        </Element>
        <Element name="work" className="element">
          <Work />
        </Element>
        <Element name="contact" className="element">
          <Contact />
        </Element>
        <ButtonWrapper>
          <Button variant="light" onClick={() => window.scrollTo(0, 0)}>⇧</Button>
        </ButtonWrapper>
      </div>
    );
  }
}

export default App;
