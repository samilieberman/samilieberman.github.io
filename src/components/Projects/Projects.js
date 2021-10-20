import React from "react";
import { Row } from "react-bootstrap";
import { HeadingText, StyledCol, ProjectsWrapper } from "./styles";
import data from "../../data.json";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  return (
    <ProjectsWrapper fluid>
      <Row>
        <HeadingText> Projects </HeadingText>
      </Row>
      <Row>
        {data[0].projects.map((item) => (
          <StyledCol>
            <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>: {item.description}
          </StyledCol>
        ))}
      </Row>
    </ProjectsWrapper>
  );
}
export default Projects;
