import React from "react";
import { Text, HeadingText, WorkWrapper } from "./styles";
import { Row } from "react-bootstrap";
import data from "../../data.json";
import "bootstrap/dist/css/bootstrap.min.css";

function Work() {
  return (
    <WorkWrapper fluid>
      <Row>
        <HeadingText> Work </HeadingText>
      </Row>
      {data[0].employment.map((employer) => (
        <Row>
          <Text>
            <a href={employer.link}>{employer.employer}</a> <br />
            {employer.title} <br />
            <ul>
              {employer.jobDescription.map((description) => (
                <li>{description}</li>
              ))}
            </ul>
          </Text>
        </Row>
      ))}
    </WorkWrapper>
  );
}
export default Work;
