import React from "react";
import { DescriptionText, HeaderText, HomeWrapper, Icons, StyledTypist } from "./styles";
import data from "../../data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Home() {
  const [renderMsg, setRenderMsg] = useState(false);
  
  function onHeaderTyped(){
    setRenderMsg(true);
  }

  return (
    <HomeWrapper>
      <HeaderText>
        {data.map((me) => (
          <div>
            <StyledTypist cursor={{ show: false }} avgTypingDelay={40} onTypingDone={onHeaderTyped}> 
              <p>Hi, <StyledTypist.Delay ms={300} /> my name is {me.name}.</p>
            </StyledTypist>
            <StyledTypist.Delay ms={30000} />
            {renderMsg &&
            <StyledTypist
              cursor={{ show: false }}
              avgTypingDelay={40}
              startDelay={2000}
            >
              <DescriptionText>{me.description}</DescriptionText>
            </StyledTypist>
            }
          </div>
        ))}
      </HeaderText>
      <Icons />
    </HomeWrapper>
  );
}
export default Home;
