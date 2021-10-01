import styled from 'styled-components'
import projects from '../../assets/projects2.png'
import { Col, Container } from 'react-bootstrap'

const HeadingText = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  margin-top: 20px;
  font-size: 24px;
  &:hover {
    color:#F4B400;
  }
`;

const Text = styled.h3`
  margin: 10px;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  `;

const ProjectsWrapper = styled(Container)`
  padding-left:50px;
  padding-right:50px;
  padding-bottom:30px;
  margin-left: 5rem;
  margin-right: 5rem;
`;

const Image = styled.div`
  background-image: url(${projects});
  height: 12rem;
  background-size: cover;
  background-repeat: no-repeat; 
`;

const StyledCol = styled(Col)`
  padding: 1rem;
`;

export {
    HeadingText, ProjectsWrapper, Image, StyledCol, Text
}