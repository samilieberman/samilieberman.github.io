import { EducationWrapper, Text, HeadingText } from "./styles";
import data from "../../data.json";

function Education() {
  return (
    <EducationWrapper>
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
