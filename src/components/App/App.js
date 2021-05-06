import React, {useEffect} from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import Education from "../Education/Education";
import Work from "../Work/Work";
import { Element } from "react-scroll";
import { Button } from "react-bootstrap";
import { ButtonWrapper, Wrapper, Sticky } from "./styles";
import data from "../../data.json";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Wrapper>
      <Sticky>
        <NavBar />
        <Element name="home" className="element">
        {data.map((item) => (  
          <Home name={item.name} description={item.description} />
        ))}
        </Element>
      </Sticky>
      <Education />
      <Work />
      <ButtonWrapper>
        <Button variant="dark" size="sm" onClick={() => window.scrollTo(0, 0)}>
          ⇧
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default App;
