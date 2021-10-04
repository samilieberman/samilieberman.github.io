import styled from 'styled-components'
import gator from '../../assets/gator.gif'
import { Col, Container } from 'react-bootstrap';

const Text = styled.h3`
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  padding-top: 10px;
`;

const HeadingText = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 24px;
  &:hover {
    color:#F4B400;
  }
`;

const ImageWrapper = styled.div`
  background-image: url(${gator});
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
`;

const EducationWrapper = styled(Container)`

`;

export { Text, HeadingText, ImageWrapper, EducationWrapper };
