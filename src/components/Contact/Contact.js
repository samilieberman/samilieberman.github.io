import React from "react";
import { SocialIcon } from "react-social-icons";
import { Wrapper } from "./styles";
import { Col } from "react-bootstrap";

function Contact() {
  return (
    <Wrapper>
      <Col>
      <SocialIcon
        url="https://www.linkedin.com/in/sami-lieberman-609059125/"
        target="_blank"
        bgColor="#157FFB"
        style={{ height: 60, width: 60 }}
      />
      </Col>
      <Col>
      <SocialIcon
        url="https://github.com/samilieberman"
        target="_blank"
        bgColor="#157FFB"
        style={{ height: 60, width: 60 }}
      />
      </Col>
      <Col>
      <SocialIcon
        url="mailto:samilieberman1@gmail.com"
        target="_blank"
        bgColor="#157FFB"
        style={{ height: 60, width: 60 }}
      />
      </Col>
    </Wrapper>
  );
}
export default Contact;
