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
          {data.map((data) => (
            <Text>
              <b>{data.employer}</b> <br />
              {data.title} <br />
              <ul>
                <li>{data.jobDescription1}</li>
                <li>{data.jobDescription2}</li>
              </ul>
              {data.previousTitle}
              <br />
              <ul>
                <li>{data.previousJobDescription1}</li>
                <li>{data.previousJobDescription2}</li>
                <li>{data.previousJobDescription3}</li>
                <li>{data.previousJobDescription4}</li>
                <li>{data.previousJobDescription5}</li>
                <li>{data.previousJobDescription6}</li>
              </ul>
            </Text>
          ))}
        </Col>
      </Row>
    </WorkWrapper>
  );
}
export default Work;
