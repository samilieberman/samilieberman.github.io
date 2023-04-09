import styled from 'styled-components'
import { Container } from "react-bootstrap";

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const Background = styled(Container)`
  display: flex;
  flex-flow: column wrap;
  padding-left: 18rem;
  padding-right: 18rem;
  justify-content: center;
  align-content: center;
  @media (max-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const WIP = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: ${(props) => props.background};
  color: white;
`;

const AppWrapper = styled.div`
  background-color: ${props => props.theme === 'light' ? 'white' : 'black'};
  color: ${props => props.theme === 'light' ? 'black' : 'white'};
  overflow-x: hidden;
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

export { AppWrapper, ButtonWrapper, Sticky, Background, WIP, ThemeButton };
