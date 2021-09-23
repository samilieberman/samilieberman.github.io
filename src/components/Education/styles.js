import styled from 'styled-components'
import gator from '../../assets/gator.gif'
import { Col } from 'react-bootstrap';

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
`;

const ImageWrapper = styled.div`
  background-image: url(${gator});
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
`;

const EducationWrapper = styled.div`
  padding: 50px;
  margin-left: 5rem;
  margin-right: 5rem;
`;

export { Text, HeadingText, ImageWrapper, EducationWrapper, StyledCol };
