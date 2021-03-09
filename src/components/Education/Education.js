import React, { Component } from "react";
import { Wrapper, Text, HeadingText } from "./styles";
import { Col, Row, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../data.json";

class Education extends Component {
  render() {
    return (
      <Wrapper>
        <Row>
          <Col xs={3}>
            <Image height="30%" src="./files/gator.png"></Image>
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
      </Wrapper>
    );
  }
}
export default Education;
