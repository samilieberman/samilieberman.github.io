import React from "react";
import { Col, Row } from "react-bootstrap";
import { HeadingText, ProjectsWrapper, Image } from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  return (
    <ProjectsWrapper>
      <Row>
        <Col xs={2}>
          <Image />
        </Col>
        <Col>
          <HeadingText> Projects </HeadingText>
        </Col>
      </Row>
    </ProjectsWrapper>
  );
}
export default Projects;
