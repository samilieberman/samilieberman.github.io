import styled from 'styled-components'
import Typist from 'react-typist';
import Contact from '../Contact/Contact';

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeaderText = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: Futura, "Trebuchet MS", Arial, sans-serif;
    font-size: 40px;
    height: 65vh;
    justify-content: center;
    margin: 50px;
    text-align: center;

    @media only screen and (min-width: 400px) {
        font-size: 50px;
    }  

    @media only screen and (min-width: 600px) {
        font-size: 65px;
    }  
`;

const DescriptionText = styled.div`
    font-size: 25px;

    @media only screen and (min-width: 400px) {
        font-size: 35px;
    }  

    @media only screen and (min-width: 600px) {
        font-size: 40px;
    }  
`;

const StyledTypist = styled(Typist)`
    color: ${(props) => props.color};
`

const Icons = styled(Contact)`
    align-self: flex-end;
`

export {
    DescriptionText, HeaderText, StyledTypist, HomeWrapper, Icons
}