import React from "react";
import { Col, Row } from "react-bootstrap";
import { Text, HeadingText, Image, WorkWrapper } from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../data.json";

function Work() {
  return (
    <WorkWrapper>
      <Row>
        <Col xs={2}>
          <Image />
        </Col>
        <Col>
          <HeadingText> Work </HeadingText>
          {data[0].employment.map((item) => (
            <Text>
              <b>{item.employer}</b> <br />
              {item.title} <br />
              <ul>
              {item.jobDescription.map((description) => (
                <li>{description}</li>
              ))}
              </ul>
            </Text>
          ))}
        </Col>
      </Row>
    </WorkWrapper>
  );
}
export default Work;
