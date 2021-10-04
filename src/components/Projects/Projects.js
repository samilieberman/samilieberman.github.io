import React from "react";
import { Row } from "react-bootstrap";
import { HeadingText, StyledCol } from "./styles";
import data from "../../data.json";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  return (
    <Row>
      <HeadingText> Projects </HeadingText>
      <Row>
        {data[0].projects.map((item) => (
          <StyledCol>
            <a href={item.url}>{item.name}</a>: {item.description}
          </StyledCol>
        ))}
      </Row>
    </Row>
  );
}
export default Projects;
