import React, { Component } from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";

import Home from "../Home/Home";
import Education from "../Education/Education";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import { Element } from "react-scroll";
import { Button } from "react-bootstrap";
import { ButtonWrapper, Wrapper, Sticky } from "./styles";

class App extends Component {
  render() {
    return (
      <Wrapper>
        
        <Sticky>
          <NavBar />
          <Element name="home" className="element">
            <Home />
          </Element>
        </Sticky>
        
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
          <Button
            variant="dark"
            size="sm"
            onClick={() => window.scrollTo(0, 0)}
          >
            ⇧
          </Button>
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

export default App;
