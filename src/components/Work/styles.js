import styled from 'styled-components'
import amex from '../../assets/amex-logo.svg'

const Text = styled.h3`
  margin: 10px;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  `;

const HeadingText = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  margin-top: 20px;
  font-size: 24px;
  &:hover {
    color:#499BFC;
  }
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
  margin-left: 5rem;
  margin-right: 5rem;
`;

export {
    HeadingText, Text, Image, WorkWrapper
}