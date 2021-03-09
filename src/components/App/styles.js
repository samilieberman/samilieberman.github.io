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

const SmallWrapper = styled.div`
  position:fixed;
  width:100%;
  z-index:2000;
  top: 0;
`;

export { ButtonWrapper, Wrapper, SmallWrapper };
