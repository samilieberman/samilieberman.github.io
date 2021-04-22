import styled from '@emotion/styled';
import retro from '../../assets/retro.gif'

const InputWrapper = styled.div`
    color: white;
    background-image: url(${retro});
`;

const HeaderText = styled.div`
    text-align: center;
    padding: 2rem;
`;

const RowWrapper = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center
`;

export {
    InputWrapper,HeaderText, RowWrapper
}