import styled from 'styled-components'
import { Container } from "react-bootstrap";

const EducationWrapper = styled(Container)`
  margin-top: 3rem;
  padding-left: 0 !important;
  padding-right: 0 !important;
`;

const HeadingText = styled.div`
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: 0.45;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.75;
`;

export { Text, HeadingText, EducationWrapper };
