import React from "react";
import { Row } from "react-bootstrap";
import { HeadingText, SkillBadge } from "./styles";
import data from "../../data.json";
import "bootstrap/dist/css/bootstrap.min.css";

function Skills() {
  return (
    <>
      <Row>
        <HeadingText>Skills</HeadingText>
      </Row>
      {data[0].skills.map((skill) => (
        <SkillBadge pill variant="primary">
          {skill}
        </SkillBadge>
      ))}
    </>
  );
}
export default Skills;
