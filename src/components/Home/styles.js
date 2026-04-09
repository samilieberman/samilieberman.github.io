import styled from 'styled-components'

const HomeWrapper = styled.div`
  padding: 4rem 0 0;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.div`
  height: 75px;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.25;
  margin-bottom: 0.5rem;

  @media only screen and (min-width: 600px) {
    font-size: 2.25rem;
  }
`;

const DescriptionText = styled.div`
  font-size: 0.95rem;
  opacity: 0.55;
  font-weight: 400;
  line-height: 1.6;
  margin-top: 0.25rem;

  @media only screen and (min-width: 600px) {
    font-size: 1rem;
  }
`;

export { DescriptionText, HeaderText, HomeWrapper }
