import React, { Component } from "react";
import { Wrapper, Row } from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";
var { SocialIcon } = require("react-social-icons");

class Contact extends Component {
  render() {
    return (
      <Wrapper>
        <Row>
          <Col xs={1}>
            <SocialIcon
              url="https://www.linkedin.com/in/sami-lieberman-609059125/"
              target="_blank"
            />
          </Col>
          <Col xs={1}>
            <SocialIcon
              url="https://github.com/samilieberman"
              target="_blank"
              bgColor="#FB5E77"
            />
          </Col>
          <Col xs={1}>
            <SocialIcon
              url="mailto:samilieberman1@gmail.com"
              target="_blank"
              bgColor="#FB56EA"
            />
          </Col>
        </Row>
      </Wrapper>
    );
  }
}
export default Contact;
