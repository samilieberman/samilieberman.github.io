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

export { ButtonWrapper, Sticky };
