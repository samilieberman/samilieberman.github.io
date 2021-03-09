import React, { Component } from "react";
import { InputWrapper, HeaderText } from "./styles";
import Typing from "react-typing-animation";
import data from "../../data.json";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
  render() {
    return (
      <InputWrapper>
        {data.map((data) => (
          <HeaderText>
            <Typing speed={120}>
              <h1>I am {data.name}.</h1>
            </Typing>
            <h4>{data.description}</h4>
          </HeaderText>
        ))}
      </InputWrapper>
    );
  }
}
export default Home;
