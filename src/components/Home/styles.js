import styled from '@emotion/styled';
import sunset from '../../assets/sunset.gif'

const InputWrapper = styled.div`
    color: white;
    background-image: url(${sunset});
`;

const HeaderText = styled.div`
    text-align: center;
    padding: 8rem;
`;

export {
    InputWrapper,HeaderText
}