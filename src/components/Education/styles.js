import styled from 'styled-components'
import gator from '../../assets/gator.png'
import { Col } from 'react-bootstrap';

const StyledCol = styled(Col)`
  align-content: right;
`;

const Text = styled.h3`
  margin: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 24px;
  padding-top: 10px;
`;

const HeadingText = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: bold;
`;

const ImageWrapper = styled.div`
  background-image: url(${gator});
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Wrapper = styled.div`
  padding: 50px;
`;

export { Text, HeadingText, ImageWrapper, Wrapper, StyledCol };
