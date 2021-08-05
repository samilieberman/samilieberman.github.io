import React from "react";
import Contact from "../Contact/Contact";
import { InputWrapper, HeaderText, StyledTypist, StyledButton } from "./styles";
import { BrowserRouter } from "react-router-dom";
import data from "../../data.json";
import resume from '../../assets/Resume.pdf';
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <>
    <InputWrapper>
    {/* <BrowserRouter>
      <StyledButton to={resume} target="_blank" download>Download</StyledButton>
    </BrowserRouter> */}
      <HeaderText>
      {data.map((item) => (
        <div>
          <StyledTypist 
            cursor={{ show: false }}
            avgTypingDelay={40}
          >
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
    </>
  );
}
export default Home;