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
          {data[0].education.map((item) => (
            <Text>
              {item.college}
              <br />
              {item.degree}
              <br />
              {item.graduationYear}, {item.location}
            </Text>
          ))}
        </Col>
      </Row>
    </Wrapper>
  );
}
export default Education;
