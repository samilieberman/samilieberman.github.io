import styled from 'styled-components'
import projects from '../../assets/projects2.png'

const HeadingText = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: bold;
  margin-top: 20px;
`;

const ProjectsWrapper = styled.div`
  padding-left:50px;
  padding-right:50px;
  padding-bottom:50px;
  height: 200px;
`;

const Image = styled.div`
  background-image: url(${projects});
  height: 10rem;
  background-size: cover;
  background-repeat: no-repeat; 
`;

export {
    HeadingText, ProjectsWrapper, Image
}