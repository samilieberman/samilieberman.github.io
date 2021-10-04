import styled from 'styled-components'
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
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  `;

const ProjectsWrapper = styled(Container)`
`;

const StyledCol = styled(Col)`
  padding: 1rem;
`;

export {
    HeadingText, ProjectsWrapper, StyledCol, Text
}