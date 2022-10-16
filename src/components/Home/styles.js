import styled from 'styled-components'
import Typist from 'react-typist';

const HomeWrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
`;

const HeaderText = styled.div`
    text-align: center;
    margin: 3rem;
    font-family: 'Bebas Neue', cursive;
    font-size: 6.5rem;
`;

const StyledTypist = styled(Typist)`
    color: ${(props) => props.color};
`

export {
    HeaderText, StyledTypist, HomeWrapper
}