import styled from 'styled-components'
import Typist from 'react-typist';

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

const HomeWrapper = styled.div`
    background-size: 100%;
    display: flex;
    flex-direction: column;
`;

export {
    InputWrapper, HeaderText, StyledTypist, HomeWrapper
}