import styled from 'styled-components'
import { Container } from "react-bootstrap";

const AppWrapper = styled.div`
  background-color: ${props => props.theme === 'light' ? '#f0efe1' : 'black'};
  color: ${props => props.theme === 'light' ? 'black' : 'white'};
  overflow-x: hidden;
`;

const Background = styled(Container)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
  @media only screen and (min-width: 1024px) {
    padding-left: 16rem;
    padding-right: 16rem;
  }  
`;

const DownButton = styled.button`
  align-self: center;
  background: transparent;
  border: none; 
  display: flex;
  margin-top: 10px;
`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const ThemeButton = styled.button`
  font-size: 24px;
  background-color: transparent;
  border-color: transparent;
  &:hover,
  &:focus, 
  &active {
    background-color: transparent;
    border-color: transparent;
    outline: none !important;
    box-shadow: none;
  }
`;

const UpBotton = styled.button`
  align-self: center;
  background: transparent;
  border: none; 
  display: flex;
  margin-bottom: 10px;
`;

const WIP = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: ${(props) => props.background};
  color: white;
`;

export { AppWrapper, Background, DownButton, Sticky, ThemeButton, UpBotton, WIP };
