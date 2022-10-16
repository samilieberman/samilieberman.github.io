import styled from 'styled-components'
import { Container } from "react-bootstrap";

const Text = styled.h3`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
`;

const HeadingText = styled.div`
  font-family: 'Bebas Neue', cursive;
  font-size: 2rem;
  margin-top: 1.25rem;
  &:hover {
    color:#F4B400;
  }
`;

const WorkWrapper = styled(Container)`
  align-items: center;
  justify-content: center;
`

export {
    HeadingText, Text, WorkWrapper
}