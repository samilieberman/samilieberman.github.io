import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import Education from "../Education/Education";
import Work from "../Work/Work";
import Projects from "../Projects/Projects";
import { Button } from "react-bootstrap";
import { ButtonWrapper } from "./styles";

const WIP = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: ${(props) => props.background};
  color: white;
`;

function App() {
  const [background, setBackground] = useState("black");

  useEffect(() => {
    const interval = setInterval(() => {
      var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      if(randomColor !== '#23954') setBackground(randomColor);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <WIP background={background}>
        <strong>
          <span role="img" aria-label="wip">
            🚧 Work In Progress 🚧
          </span>
        </strong>
      </WIP>
      <NavBar />
      <Home />
      <Education />
      <Work />
      <Projects />
      <ButtonWrapper>
        <Button variant="dark" size="sm" onClick={() => window.scrollTo(0, 0)}>
          ⇧
        </Button>
      </ButtonWrapper>
    </>
  );
}

export default App;
