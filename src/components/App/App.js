import React, { useEffect, useState } from "react";
import Home from "../Home/Home";
import Education from "../Education/Education";
import Work from "../Work/Work";
import Projects from "../Projects/Projects";
import { Button } from "react-bootstrap";
import { ButtonWrapper, Background, WIP, ThemeButton } from "./styles";

function App() {
  const [background, setBackground] = useState("black");

  useEffect(() => {
    const interval = setInterval(() => {
      var arr = ["#FAD74F", "#F19344", "#25279C", "#492E5E", "#F2846B"];
      var randomColor = arr[Math.floor(Math.random() * arr.length)];
      setBackground(randomColor);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log(theme);
  };

  return (
    <>
      <Background theme={theme}>
        <ThemeButton onClick={themeToggler} variant="light">
          {theme === "light" ? (
            <span aria-label="light" role="img">
              🌞
            </span>
          ) : (
            <span aria-label="dark" role="img">
              🌜
            </span>
          )}
        </ThemeButton>
        <WIP background={background}>
          <strong>
            <span role="img" aria-label="wip">
              🚧 Work In Progress 🚧
            </span>
          </strong>
        </WIP>
        {/* <NavBar /> */}
        <Home />
        <Education />
        <Work />
        <Projects />
        <ButtonWrapper>
          <Button
            variant="dark"
            size="sm"
            onClick={() => window.scrollTo(0, 0)}
          >
            ⇧
          </Button>
        </ButtonWrapper>
      </Background>
    </>
  );
}

export default App;
