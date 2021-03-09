import React, { Component } from "react";
import { Col, Row, Image } from "react-bootstrap";
import { Wrapper, Text, HeadingText } from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../data.json";

class Work extends Component {
  render() {
    return (
      <Wrapper>
        <Row>
          <Col xs={3}>
            <Image
              height="30%"
              src="./files/amex-american-express-logo.svg"
            ></Image>
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
      </Wrapper>
    );
  }
}
export default Work;
