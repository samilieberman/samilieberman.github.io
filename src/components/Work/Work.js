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
      {data.employment.map((employer, idx) => (
        <Row key={idx}>
          <Text>
            <a href={employer.link} target="_blank" rel="noopener noreferrer">{employer.employer}</a> <br />
            {employer.title} <br />
            <i> {employer.jobTime} </i> <br />
            <ul>
              {employer.jobDescription && employer.jobDescription.map((description) => (
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
