import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import Navbar from 'components/Navbar/Navbar';
import GlobalStyle from 'components/GlobalStyle';

// eslint-disable-next-line react/prop-types
const MainTemplate = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Navbar />
      {children}
    </>
  </ThemeProvider>
);

MainTemplate.propsType = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default MainTemplate;
