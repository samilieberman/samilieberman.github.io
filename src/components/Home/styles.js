import styled from 'styled-components'
import retro from '../../assets/retro2.gif'
import Typist from 'react-typist';
import { Button } from "react-bootstrap";

const InputWrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
`;

const HeaderText = styled.div`
    text-align: center;
    padding: 2rem;
`;

const StyledTypist = styled(Typist)`
    color: ${(props) => props.color};
`

const ThemeButton = styled(Button)`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  border-color: transparent;
  &:hover {
    background-color: transparent;
    border-color: transparent;
  }
  &:focus {
    background-color: transparent;
    border-color: transparent;
    outline: none;
    box-shadow: none;
  }
`;

const HomeWrapper = styled.div`
    /* background-image: url(${retro}); */
    background-size: 100%;
    height: 20rem;
`;

export {
    InputWrapper, HeaderText, StyledTypist, ThemeButton, HomeWrapper
}