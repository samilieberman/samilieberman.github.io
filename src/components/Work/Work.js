import React  from "react";
import { Col, Row } from "react-bootstrap";
import { Text, HeadingText, Image } from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../data.json";

function Work() {
  return (
    <Row>
      <Col xs={2}>
        <Image />
      </Col>
      <Col>
        <HeadingText> Work </HeadingText>
        {data.map((data) => (
          <Text>
            <b>
              <h3>{data.employer}</h3>
            </b>
            <h4>
              {data.title}
              <br />
              <ul>
                <li>{data.jobDescription1}</li>
                <li>{data.jobDescription2}</li>
              </ul>
            </h4>
            <h4>
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
            </h4>
          </Text>
        ))}
      </Col>
    </Row>
  );
}
export default Work;
