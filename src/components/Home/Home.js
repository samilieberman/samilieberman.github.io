import React from "react";
import { InputWrapper, HeaderText, RowWrapper } from "./styles";
import Typing from "react-typing-animation";
import data from "../../data.json";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
var { SocialIcon } = require("react-social-icons");

function Home() {
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
      <RowWrapper>
        <Col xs={1}>
          <SocialIcon
            url="https://www.linkedin.com/in/sami-lieberman-609059125/"
            target="_blank"
            bgColor="#FFFFFF"
          />
        </Col>
        <Col xs={1}>
          <SocialIcon
            url="https://github.com/samilieberman"
            target="_blank"
            bgColor="#FFFFFF"
          />
        </Col>
        <Col xs={1}>
          <SocialIcon
            url="mailto:samilieberman1@gmail.com"
            target="_blank"
            bgColor="#FFFFFF"
          />
        </Col>
      </RowWrapper>
    </InputWrapper>
  );
}
export default Home;
