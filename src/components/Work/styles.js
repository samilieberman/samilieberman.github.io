import styled from 'styled-components'

const WorkWrapper = styled.section`
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

const JobRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
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
