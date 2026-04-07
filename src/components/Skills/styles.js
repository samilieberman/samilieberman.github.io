import styled from 'styled-components'
import { Badge, Container } from "react-bootstrap";

const SkillsWrapper = styled(Container)`
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

const SkillBadge = styled(Badge)`
  background-color: transparent !important;
  border: 1px solid currentColor !important;
  color: inherit !important;
  font-size: 0.7rem !important;
  font-weight: 400 !important;
  letter-spacing: 0.02em !important;
  padding: 0.3rem 0.65rem !important;
  margin-right: 0.4rem !important;
  margin-bottom: 0.5rem !important;
  border-radius: 2px !important;
  opacity: 0.7;
  display: inline-block !important;
`;

export { HeadingText, SkillBadge, SkillsWrapper }
