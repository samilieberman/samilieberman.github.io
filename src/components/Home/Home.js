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
              <p>I am {item.name}.</p>
            </StyledTypist>
            <StyledTypist.Delay ms={30000} />
            <StyledTypist
              cursor={{ show: false }}
              avgTypingDelay={40}
              startDelay={2000}
            >
              <h1>{item.description}</h1>
            </StyledTypist>
          </div>
        ))}
      </HeaderText>
      <Contact />
    </HomeWrapper>
  );
}
export default Home;
