import styled from 'styled-components'
import gator from '../../assets/gator.gif'
import { Col, Container } from 'react-bootstrap';

const StyledCol = styled(Col)`
  align-content: right;
`;

const Text = styled.h3`
  margin: 10px;
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
  padding-left:50px;
  padding-right:50px;
  margin-left: 5rem;
  margin-right: 5rem;
`;

export { Text, HeadingText, ImageWrapper, EducationWrapper, StyledCol };
