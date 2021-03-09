import styled from '@emotion/styled';

const Wrapper = styled.div`
    background-color: #343a40;
    color: white;
    height: 100vh;
    margin-top: 5px;
    width:100%;
`;

const Text = styled("h3")`
  margin: 10px;
  font-family: monospace;
`;

const HeadingText = styled("h1")`
  font-family: monospace;
  font-weight: bold;
  margin-top: 20px;
`;

export {
    Wrapper, HeadingText, Text
}