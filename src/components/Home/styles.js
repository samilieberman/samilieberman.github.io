import styled from 'styled-components'
import Typist from 'react-typist';

const HomeWrapper = styled.div`
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

export {
    HeaderText, StyledTypist, HomeWrapper
}