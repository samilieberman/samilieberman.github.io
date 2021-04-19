import styled from "@emotion/styled";

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Wrapper = styled.div`
  background-color: white;
`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export { ButtonWrapper, Wrapper, Sticky };
