import styled from 'styled-components'

const Text = styled.h3`
  font-family: 'Lato', sans-serif;
  font-size: 18px;
`;

const HeadingText = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 24px;
  &:hover {
    color:#F4B400;
  }
`;

const EducationWrapper = styled.div`
  margin-top: 0.625rem;
`;

export { Text, HeadingText, EducationWrapper };
