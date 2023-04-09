import React, { useState, useEffect } from "react";
import Home from "../Home/Home";
import Education from "../Education/Education";
import Work from "../Work/Work";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import { Button } from "react-bootstrap";
import { AppWrapper, ButtonWrapper, Background, ThemeButton } from "./styles";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;

  return (
    <AppWrapper theme={theme}>
      <ThemeButton onClick={themeToggler} variant="light" size="lg" shadow="none">
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
      <Background fluid>
        <Home />
        <Education />
        <Work />
        <Skills theme={theme} />
        <Projects isMobile={isMobile} />
        <ButtonWrapper>
          <Button
            variant="dark"
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ⇧
          </Button>
        </ButtonWrapper>
      </Background>
    </AppWrapper>
  );
}

export default App;
