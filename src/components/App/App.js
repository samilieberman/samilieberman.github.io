import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import Education from "../Education/Education";
import Work from "../Work/Work";
import Projects from "../Projects/Projects";
import { Element } from "react-scroll";
import { Button } from "react-bootstrap";
import { ButtonWrapper, Wrapper, Sticky } from "./styles";
import data from "../../data.json";

function App() {
  const [background, setBackground] = useState("red");

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      setBackground(randomColor);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function handleHover(e) {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBackground(randomColor);
  }

  return (
    <Wrapper>
      <div
        onMouseOver={handleHover}
        style={{
          textAlign: "center",
          backgroundColor: `${background}`,
          color: "white",
          padding: "2rem",
        }}
      >
        <strong> <span role="img" aria-label="wip"> 🚧🚧🚧 This is a WIP 🚧🚧🚧 </span> </strong> <br />
        Hover over me!
      </div>
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
      <Projects />
      <ButtonWrapper>
        <Button variant="dark" size="sm" onClick={() => window.scrollTo(0, 0)}>
          ⇧
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default App;
