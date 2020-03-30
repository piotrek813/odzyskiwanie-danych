import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import GlobalStyle from 'components/GlobalStyle';
import Navbar from 'components/Navbar/Navbar';
import HeroTemplate from 'templates/HeroTemplate';

const MainTemplate = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Navbar />
      <HeroTemplate data={data} />
      <div id="start" />
      {children}
    </>
  </ThemeProvider>
);

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MainTemplate;
