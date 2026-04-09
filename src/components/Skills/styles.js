import styled from 'styled-components'

const SkillsWrapper = styled.section`
  margin-top: 3rem;
`;

const HeadingText = styled.h2`
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: 0.45;
  margin: 0 0 1rem;
`;

const SkillBadge = styled.span`
  background-color: transparent;
  border: 1px solid currentColor;
  color: inherit;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  padding: 0.3rem 0.65rem;
  margin-right: 0.4rem;
  margin-bottom: 0.5rem;
  border-radius: 2px;
  opacity: 0.7;
  display: inline-block;
`;

export { HeadingText, SkillBadge, SkillsWrapper }
