import React from "react";
import { Row } from "react-bootstrap";
import { Text, HeadingText, WorkWrapper } from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../data.json";

function Work() {
  return (
    <WorkWrapper>
      <Row>
        <HeadingText> Work </HeadingText>
        {data[0].employment.map((employer) => (
          <Text>
            <a href={employer.link}>{employer.employer}</a> <br />
            {employer.title} <br />
            <ul>
              {employer.jobDescription.map((description) => (
                <li>{description}</li>
              ))}
            </ul>
          </Text>
        ))}
      </Row>
    </WorkWrapper>
  );
}
export default Work;
