import React from "react";
import { Row } from "react-bootstrap";
import { HeadingText, SkillBadge, SkillsWrapper } from "./styles";
import data from "../../data.json";
import "bootstrap/dist/css/bootstrap.min.css";

function Skills({theme}) {
  return (
    <SkillsWrapper fluid>
      <Row>
        <HeadingText>Skills</HeadingText>
      </Row>
      {data[0].skills.map((skill) => (
        <SkillBadge pill variant="primary" theme={theme}>
          {skill}
        </SkillBadge>
      ))}
    </SkillsWrapper>
  );
}
export default Skills;
