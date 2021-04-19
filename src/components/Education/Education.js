import React, { Component } from "react";
import { Text, HeadingText, ImageWrapper } from "./styles";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../data.json";

class Education extends Component {
  render() {
    return (
        <Row>
          <Col xs={2}>
              <ImageWrapper/>
          </Col>
          <Col>
            <HeadingText> Education </HeadingText>
            {data.map((data) => (
              <Text>
                <h3>{data.college}</h3>
                <h3>
                  {data.degree}
                  <br />
                  {data.graduationYear}, {data.location}
                </h3>
              </Text>
            ))}
          </Col>
        </Row>
    );
  }
}
export default Education;
