import React from "react";
import { Text, HeadingText, ImageWrapper, Wrapper, StyledCol } from "./styles";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../data.json";

function Education() {
  return (
    <Wrapper>
      <Row>
        <Col>
          <ImageWrapper />
        </Col>
        <StyledCol xs lg="10" >
          <HeadingText> Education </HeadingText>
          {data[0].education.map((item) => (
            <Text>
              {item.college}
              <br />
              {item.degree}
              <br />
              {item.graduationYear}, {item.location}
            </Text>
          ))}
        </StyledCol>
      </Row>
    </Wrapper>
  );
}
export default Education;
