import styled from 'styled-components'

const HeadingText = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 2rem;
  margin-top: 1.25rem;
  &:hover {
    color:#F4B400;
  }
`;

const StyledCol = styled.div`
  padding: .625rem;
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
`;

const StyledRow = styled.div`
  margin-bottom: 10px;
`

const ProjectsWrapper = styled.div`
  align-items: center;
  justify-content: center;
`;

export {
  HeadingText, StyledCol, ProjectsWrapper, StyledRow
}