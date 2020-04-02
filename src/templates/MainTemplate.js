import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import GlobalStyle from 'components/GlobalStyle';
import Navbar from 'components/Navbar/Navbar';
import HeroTemplate from 'templates/HeroTemplate';
import Footer from 'components/Footer';

const MainTemplate = ({ children, data, hero }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Navbar />
      <HeroTemplate
        data={data}
        heading={hero.heading}
        paragraph={hero.paragraph}
      />
      <div id="start" />
      {children}
      <Footer>
        Strona używa plików cookies do śledzenia zachowań użytkowników na
        stronie. ©2020 CENTRUM ODZYSKIWANIA DANYCH. Warszawa, ul. Opaczewska
        43/8
      </Footer>
    </>
  </ThemeProvider>
);

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  hero: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MainTemplate;
