import { HeadingText, StyledCol, ProjectsWrapper, StyledRow } from "./styles";
import data from "../../data.json";

function Projects({ isMobile }) {
  return (
    <ProjectsWrapper>
      <HeadingText> Projects </HeadingText>
      <div>
        {data.projects.map((item, idx) => (
          <div key={idx}>
            {!isMobile ?
            <StyledCol>
              <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>: {item.description}
            </StyledCol>
            :
            <StyledRow>
              <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>: {item.description}
            </StyledRow>
          }
          </div>
        ))}
      </div>
    </ProjectsWrapper>
  );
}
export default Projects;
