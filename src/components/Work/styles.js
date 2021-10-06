import styled from 'styled-components'
import amex from '../../assets/amex-logo.svg'
import { Row } from "react-bootstrap";

const Text = styled.h3`
  font-family: 'Lato', sans-serif;
  font-size: 18px;
`;

const HeadingText = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  margin-top: 1.25rem;
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

const WorkWrapper = styled(Row)`
  display: flex;
  flex-direction: column;
`

export {
    HeadingText, Text, Image, WorkWrapper
}