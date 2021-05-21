import styled from 'styled-components'
import projects from '../../assets/projects2.png'
import { Col } from 'react-bootstrap'

const HeadingText = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: bold;
  margin-top: 20px;
`;

const Text = styled.h3`
  margin: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 24px;
  `;

const ProjectsWrapper = styled.div`
  padding-left:50px;
  padding-right:50px;
  padding-bottom:50px;
`;

const Image = styled.div`
  background-image: url(${projects});
  height: 12rem;
  background-size: cover;
  background-repeat: no-repeat; 
`;

const StyledCol = styled(Col)`
  color: black;
  padding: 1rem;
`;

export {
    HeadingText, ProjectsWrapper, Image, StyledCol, Text
}