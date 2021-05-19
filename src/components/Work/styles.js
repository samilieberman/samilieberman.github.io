import styled from '@emotion/styled';
import amex from '../../assets/amex-logo.svg'

const Text = styled("h3")`
  margin: 10px;
  font-family: monospace;
`;

const HeadingText = styled("h1")`
  font-family: monospace;
  font-weight: bold;
  margin-top: 20px;
`;

const Image = styled.div`
  background-image: url(${amex});
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
`;

const WorkWrapper = styled.div`
  padding-left:50px;
  padding-right:50px;
  padding-bottom:50px;
`;

export {
    HeadingText, Text, Image, WorkWrapper
}