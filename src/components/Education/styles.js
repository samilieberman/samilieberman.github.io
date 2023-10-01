import styled from 'styled-components'
import { Container } from "react-bootstrap";

const Text = styled.h3`
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
`;

const HeadingText = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 2rem;
  &:hover {
    color:#F4B400;
  }
`;

const EducationWrapper = styled(Container)`
  margin-top: 4rem;
  align-items: center;
  justify-content: center;
`;

export { Text, HeadingText, EducationWrapper };
