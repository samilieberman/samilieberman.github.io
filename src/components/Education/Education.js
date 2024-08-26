import React, { forwardRef } from "react";
import { EducationWrapper, Text, HeadingText } from "./styles";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../data.json";

const Education = forwardRef((_, ref) => {
  return (
    <EducationWrapper fluid>
      <Row ref={ref}>
        <HeadingText> Education </HeadingText>
      </Row>
      {data[0].education.map((item, idx) => (
        <Row key={idx}>
          <Text>
            {item.college}
            <br />
            {item.degree}
            <br />
            {item.graduationYear}, {item.location}
          </Text>
        </Row>
      ))}
    </EducationWrapper>
  );
});

export default Education;
