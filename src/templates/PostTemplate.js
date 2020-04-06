import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import media from 'utils/media';
import GlobalStyle from 'components/GlobalStyle';
import Navbar from 'components/Navbar/Navbar';
import HeroTemplate from 'templates/HeroTemplate';
import Footer from 'components/Footer';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 39px;
  font-size: ${theme.font.size.content.normal};
  text-align: justify;

  ${media.big`
      padding: 39px 100px;
  `}

  & > img {
    padding: 30px 0;
    width: 100%;

    ${media.small`
        width: 60%
    `}
  }
`;

const MainTemplate = ({ children, data, heading, date }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Navbar isPost />
      <HeroTemplate isPost data={data} heading={heading} date={date} />
      <StyledMain>{children}</StyledMain>
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
  heading: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default MainTemplate;
