import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Home from "../Home/Home";
import Education from "../Education/Education";
import Work from "../Work/Work";
import Skills from "../Skills/Skills";
import { AppWrapper, Background, ThemeButton, UpButton } from "./styles";

const lightTheme = { mode: "light", text: "#1c1c1a", bg: "#f5f4ef" };
const darkTheme = { mode: "dark", text: "#e6e4dc", bg: "#111110" };

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    const handleBeforeUnload = () => window.scrollTo(0, 0);
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AppWrapper>
        <ThemeButton onClick={themeToggler} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
          {theme === "light" ? "dark" : "light"}
        </ThemeButton>
        <Background>
          <Home />
          <Education />
          <Work />
          <Skills />
          <UpButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
            ↑
          </UpButton>
        </Background>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
