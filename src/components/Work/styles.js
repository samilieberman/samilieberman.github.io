import styled from 'styled-components'
import amex from '../../assets/amex-logo.svg'

const Text = styled.h3`
  font-family: 'Lato', sans-serif;
  font-size: 18px;
`;

const HeadingText = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  margin-top: 20px;
  font-size: 24px;
  &:hover {
    color:#F4B400;
  }
`;

const Image = styled.div`
  background-image: url(${amex});
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
`;

export {
    HeadingText, Text, Image
}