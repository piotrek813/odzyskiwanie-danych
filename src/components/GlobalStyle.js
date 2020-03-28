import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${({ theme }) => theme.white};
    font-family: ${({ theme }) => theme.font.family};
    color: ${({ theme }) => theme.dark};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    height: 300vh;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
