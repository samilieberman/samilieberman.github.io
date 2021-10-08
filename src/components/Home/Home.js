import React from "react";
import Contact from "../Contact/Contact";
import { HeaderText, StyledTypist, HomeWrapper } from "./styles";
import data from "../../data.json";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <HomeWrapper>
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
    </HomeWrapper>
  );
}
export default Home;
