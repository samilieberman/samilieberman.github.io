import styled from 'styled-components'
import { Col, Container } from 'react-bootstrap'

const HeadingText = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  margin-top: 1.25rem;
  font-size: 24px;
  &:hover {
    color:#F4B400;
  }
`;

const StyledCol = styled(Col)`
  padding: .625rem;
`;

const ProjectsWrapper = styled(Container)`
  align-items: center;
  justify-content: center;
`;

export {
    HeadingText, StyledCol, ProjectsWrapper
}