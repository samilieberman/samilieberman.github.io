import styled from 'styled-components'
import amex from '../../assets/amex-logo.svg'
import { Container } from 'react-bootstrap';

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
    color:#F4B400;
  }
`;

const Image = styled.div`
  background-image: url(${amex});
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
`;

const WorkWrapper = styled(Container)`
  padding-left: 1rem;
  padding-right: 1rem;
`;

export {
    HeadingText, Text, Image, WorkWrapper
}