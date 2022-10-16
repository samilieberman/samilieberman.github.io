import styled from 'styled-components'
import { Col, Container } from 'react-bootstrap'

const HeadingText = styled.div`
  font-family: 'Bebas Neue', cursive;
  font-size: 2rem;
  margin-top: 1.25rem;
  &:hover {
    color:#F4B400;
  }
`;

const StyledCol = styled(Col)`
  padding: .625rem;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
`;

const ProjectsWrapper = styled(Container)`
  align-items: center;
  justify-content: center;
`;

export {
    HeadingText, StyledCol, ProjectsWrapper
}