import { EducationWrapper, Text, HeadingText } from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../data.json";

function Education() {
  return (
    <EducationWrapper fluid>
      <HeadingText>Education</HeadingText>
      {data.education.map((item, idx) => (
        <Text key={idx}>
          {item.college}
          <br />
          {item.degree}
          <br />
          {item.graduationYear}, {item.location}
        </Text>
      ))}
    </EducationWrapper>
  );
}

export default Education;
