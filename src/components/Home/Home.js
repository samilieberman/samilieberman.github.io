import React from "react";
import Contact from "../Contact/Contact";
import { InputWrapper, HeaderText } from "./styles";
import Typing from "react-typing-animation";
import data from "../../data.json";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <InputWrapper>
      <HeaderText>
      {data.map((item) => (
        <div>
        <Typing speed={120}>
          <h1>I am {item.name}.</h1>
        </Typing>
        <h4>{item.description}</h4>
        </div>
      ))}
      </HeaderText>
      <Contact />
    </InputWrapper>
  );
}
export default Home;