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
    // font-family: 'Bebas Neue', cursive;
    font-size: 4.5rem;
    background-image: linear-gradient(
        -225deg,
        #faf92f 0%,
        #8c8c8c 29%,
        #00d4ff 67%,
        #fff800 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear;
    display: inline-block;
    
    @keyframes textclip {
      to {
        background-position: 200% center;
      }
    }
`;

const StyledTypist = styled(Typist)`
    color: ${(props) => props.color};
`

export {
    HeaderText, StyledTypist, HomeWrapper
}