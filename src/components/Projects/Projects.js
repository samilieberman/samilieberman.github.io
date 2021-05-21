import React from "react";
import { Col, Row } from "react-bootstrap";
import { HeadingText, ProjectsWrapper, Image, StyledCol } from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  return (
    <ProjectsWrapper>
      <Row>
        <Col xs lg="2">
          <Image />
        </Col>
        <Col>
          <HeadingText> Projects </HeadingText>
          <Row>
            <StyledCol><a href="https://github.com/samilieberman/StudyBuddy">Study Buddy</a>: React Native Android and iOS mobile application
                that facilitates finding ‘study buddies’</StyledCol>
            <StyledCol><a href="https://github.com/samilieberman/hidden_gems">Hidden Gems</a>: Android mobile application that helped users locate
                ‘hidden gems’ in their vicinity by utilizing Firebase, Flutter,
                Dart, and Google Maps API</StyledCol>
            <StyledCol><a href="https://github.com/GamerGator4/GG4">Gamer Gator</a>: Led a team as scrum master in developing a web
                application to improve event planning for gamers using the MEAN
                Stack, NodeJS, PassportJS, UI-Calendar API, and Google Maps API.</StyledCol>
          </Row>
        </Col>
      </Row>
    </ProjectsWrapper>
  );
}
export default Projects;
