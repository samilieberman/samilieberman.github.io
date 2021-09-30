import React from "react";
import { Row } from "react-bootstrap";
import { HeadingText, SkillsWrapper, SkillBadge } from "./styles";
import data from "../../data.json";
import "bootstrap/dist/css/bootstrap.min.css";

function Skills() {
  return (
    <SkillsWrapper>
      <Row>
        <HeadingText>Skills</HeadingText>
      </Row>
      {data[0].skills.map((skill) => (
        <SkillBadge pill variant="primary">
          {skill}
        </SkillBadge>
      ))}
    </SkillsWrapper>
  );
}
export default Skills;
