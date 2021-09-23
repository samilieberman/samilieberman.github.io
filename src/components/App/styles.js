import styled from 'styled-components'

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const Background = styled.div` 
  background-color: ${props => props.theme === 'light' ? 'white' : 'black'}
  color: ${props => props.theme === 'dark' ? 'black' : 'white'}   
`;

const WIP = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: ${(props) => props.background};
  color: white;
`;

export { ButtonWrapper, Sticky, Background, WIP };
