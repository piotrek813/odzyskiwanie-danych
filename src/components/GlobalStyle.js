import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.white};
    font-family: ${({ theme }) => theme.font.family};
    color: ${({ theme }) => theme.black};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: 1.6rem;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
