import React from "react";
import Contact from "../Contact/Contact";
import { InputWrapper, HeaderText, StyledTypist, ThemeButton, HomeWrapper } from "./styles";
import data from "../../data.json";
import "bootstrap/dist/css/bootstrap.min.css";

function Home({ theme, setTheme }) {
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <HomeWrapper>
      <ThemeButton onClick={themeToggler} variant="light" size="lg">
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
      <InputWrapper>
        <HeaderText>
          {data.map((item) => (
            <div>
              <StyledTypist cursor={{ show: false }} avgTypingDelay={40}>
                <h1>I am {item.name}.</h1>
              </StyledTypist>
              <StyledTypist.Delay ms={20000} />
              <StyledTypist
                cursor={{ show: false }}
                avgTypingDelay={40}
                startDelay={2000}
              >
                <h4>{item.description}</h4>
              </StyledTypist>
            </div>
          ))}
        </HeaderText>
        <Contact />
      </InputWrapper>
    </HomeWrapper>
  );
}
export default Home;
