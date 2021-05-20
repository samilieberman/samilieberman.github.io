import React from "react";
import { Text, HeadingText, ImageWrapper, Wrapper } from "./styles";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../data.json";

function Education() {
  return (
    <Wrapper>
      <Row>
        <Col xs={2}>
          <ImageWrapper />
        </Col>
        <Col>
          <HeadingText> Education </HeadingText>
          {data.map((data, index) => (
            <Text>
              {data.college}
              <br />
              {data.degree}
              <br />
              {data.graduationYear}, {data.location}
            </Text>
          ))}
        </Col>
      </Row>
    </Wrapper>
  );
}
export default Education;
