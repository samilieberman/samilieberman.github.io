import styled from 'styled-components'
import { Container } from "react-bootstrap";

const WorkWrapper = styled(Container)`
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

const JobRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.65rem 0;
`;

const JobCompany = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  opacity: 0.9;
  margin-bottom: 0.5rem;
`;

const JobTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
`;

const JobTitle = styled.span`
  font-size: 0.875rem;
  opacity: 0.6;
`;

const JobDate = styled.span`
  font-size: 0.75rem;
  opacity: 0.4;
  white-space: nowrap;
  flex-shrink: 0;
`;

const Text = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.75;
`;

export { HeadingText, Text, WorkWrapper, JobRow, JobCompany, JobTitleRow, JobTitle, JobDate }
