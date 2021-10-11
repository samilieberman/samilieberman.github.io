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

const SkillBadge = styled(Badge)`
  margin-right:.75rem;
  color: ${props => props.theme === 'light' ? 'white' : 'black'};
`;

const SkillsWrapper = styled(Container)`
  align-items: center;
  justify-content: center;
`;

export {
    HeadingText, SkillBadge, SkillsWrapper
}