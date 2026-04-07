import { useState, useEffect } from "react";
import Home from "../Home/Home";
import Education from "../Education/Education";
import Work from "../Work/Work";
import Skills from "../Skills/Skills";
import { AppWrapper, Background, ThemeButton, UpBotton } from "./styles";

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
    <AppWrapper $theme={theme}>
      <ThemeButton onClick={themeToggler}>
        {theme === "light" ? "dark" : "light"}
      </ThemeButton>
      <Background>
        <Home />
        <Education />
        <Work />
        <Skills theme={theme} />
        <UpBotton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑
        </UpBotton>
      </Background>
    </AppWrapper>
  );
}

export default App;
