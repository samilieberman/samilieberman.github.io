import React from "react";
import Contact from "../Contact/Contact";
import { InputWrapper, HeaderText } from "./styles";
import Typing from "react-typing-animation";
import data from "../../data.json";
import "bootstrap/dist/css/bootstrap.min.css";

function Home(props) {
  return (
    <InputWrapper>
      {data.map((data) => (
        <HeaderText>
          <Typing speed={120}>
            <h1>I am {props.name}.</h1>
          </Typing>
          <h4>{props.description}</h4>
        </HeaderText>
      ))}
      <Contact/>
    </InputWrapper>
  );
}
export default Home;
