import styled from 'styled-components'
import { Badge, Row } from "react-bootstrap";

const HeadingText = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 24px;
  &:hover {
    color:#499BFC;
  }
`;

const SkillsWrapper = styled.div`
    padding-left:50px;
    padding-right:50px;
    margin-left: 5rem;
    margin-right: 5rem;
`;

const SkillBadge = styled(Badge)`
    margin-right:.75rem;
`;

export {
    HeadingText, SkillsWrapper, SkillBadge
}