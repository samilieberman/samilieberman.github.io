import styled from 'styled-components'

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  overflow-x: hidden;
  transition: background-color 0.2s ease, color 0.2s ease;
`;

const Background = styled.main`
  max-width: 660px;
  margin: 0 auto;
  padding: 0 2rem 2rem;
`;

const ThemeButton = styled.button`
  display: block;
  margin-left: auto;
  padding: 1.5rem 2rem 0;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: inherit;
  opacity: 0.4;
  transition: opacity 0.15s ease;
  &:hover {
    opacity: 0.85;
  }
`;

const UpButton = styled.button`
  display: block;
  margin: 1.5rem auto 0;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: inherit;
  opacity: 0.3;
  transition: opacity 0.15s ease;
  padding: 0;
  &:hover {
    opacity: 0.7;
  }
`;

export { AppWrapper, Background, ThemeButton, UpButton };
