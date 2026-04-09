import { DescriptionText, HeaderText, HomeWrapper } from "./styles";
import Contact from "../Contact/Contact";
import data from "../../data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { TypeAnimation } from 'react-type-animation';

function Home() {
  const [renderMsg, setRenderMsg] = useState(false);

  return (
    <HomeWrapper>
      <HeaderText>
        <TypeAnimation
          sequence={[
            `Hi, my name is ${data.name}.`,
            () => setRenderMsg(true),
          ]}
          speed={60}
          cursor
        />
        {renderMsg && (
          <DescriptionText>
            <TypeAnimation
              sequence={[2000, data.description]}
              speed={60}
              cursor={false}
            />
          </DescriptionText>
        )}
      </HeaderText>
      <Contact />
    </HomeWrapper>
  );
}

export default Home;
