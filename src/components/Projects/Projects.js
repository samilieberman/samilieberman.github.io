import React from "react";
import { Row } from "react-bootstrap";
import { HeadingText, StyledCol, ProjectsWrapper, StyledRow } from "./styles";
import data from "../../data.json";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects({ isMobile }) {
  return (
    <ProjectsWrapper fluid>
      <Row>
        <HeadingText> Projects </HeadingText>
      </Row>
      <Row>
        {data[0].projects.map((item) => (
           !isMobile ?
          <StyledCol>
            <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>: {item.description}
          </StyledCol>
          :
          <StyledRow>
            <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>: {item.description}
          </StyledRow>
        ))}
      </Row>
    </ProjectsWrapper>
  );
}
export default Projects;
