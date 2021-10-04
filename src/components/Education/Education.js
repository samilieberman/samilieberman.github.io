import React from "react";
import { Text, HeadingText } from "./styles";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../data.json";

function Education() {
  return (
    <>
      <Row>
        <HeadingText> Education </HeadingText>
      </Row>
      {data[0].education.map((item) => (
        <Row>
          <Text>
            {item.college}
            <br />
            {item.degree}
            <br />
            {item.graduationYear}, {item.location}
          </Text>
        </Row>
      ))}
    </>
  );
}
export default Education;
