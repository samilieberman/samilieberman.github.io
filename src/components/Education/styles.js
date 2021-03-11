import styled from "@emotion/styled";
import gator from '../../assets/gator.png'

const Wrapper = styled.div`
  background-color: white;
  color: black;
  height: 45vh;
  margin-top: 30%;
  width: 100%;
`;

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

export { Wrapper, Text, HeadingText, ImageWrapper };
