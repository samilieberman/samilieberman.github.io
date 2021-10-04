import styled from 'styled-components'
import { Badge, Container } from "react-bootstrap";

const HeadingText = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 24px;
  &:hover {
    color:#F4B400;
  }
`;

const SkillsWrapper = styled(Container)`
  padding-left: 1rem;
  padding-right: 1rem;
`;

const SkillBadge = styled(Badge)`
    margin-right:.75rem;
`;

export {
    HeadingText, SkillsWrapper, SkillBadge
}