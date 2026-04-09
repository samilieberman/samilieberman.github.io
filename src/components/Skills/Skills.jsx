import { HeadingText, SkillBadge, SkillsWrapper } from "./styles";
import data from "../../data.json";

function Skills() {
  return (
    <SkillsWrapper>
      <HeadingText>Skills</HeadingText>
      {data.skills.map((skill, idx) => (
        <SkillBadge key={idx}>
          {skill}
        </SkillBadge>
      ))}
    </SkillsWrapper>
  );
}

export default Skills;
