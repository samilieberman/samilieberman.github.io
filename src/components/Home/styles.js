import styled from '@emotion/styled';
import retro from '../../assets/retro.gif'

const InputWrapper = styled.div`
    color: white;
    background-image: url(${retro});
    background-repeat: no-repeat;
    background-size: 100%;
`;

const HeaderText = styled.div`
    text-align: center;
    padding: 2rem;
`;

export {
    InputWrapper,HeaderText
}