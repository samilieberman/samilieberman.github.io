import styled from "@emotion/styled";
import gator from '../../assets/gator.png'

const Text = styled("h3")`
  margin: 10px;
  font-family: monospace;
`;

const HeadingText = styled("h1")`
  font-family: monospace;
  font-weight: bold;
`;

const ImageWrapper = styled.div`
  background-image: url(${gator});
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
`;

const EducationWrapper = styled.div`
  margin-top: 0.75rem;
  border-bottom: 1px dotted black;
`;

export { Text, HeadingText, ImageWrapper, EducationWrapper };
