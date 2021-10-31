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

const Headshot = styled.img`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
`;

export {
    HeaderText, StyledTypist, HomeWrapper, Headshot
}