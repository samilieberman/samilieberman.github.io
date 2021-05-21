import styled from 'styled-components'
import amex from '../../assets/amex-logo.svg'

const Text = styled.h3`
  margin: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 24px;
  `;

const HeadingText = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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