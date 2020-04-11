import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import GlobalStyle from 'components/GlobalStyle';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Navbar from 'components/Navbar/Navbar';
import HeroTemplate from 'templates/HeroTemplate';
import Footer from 'components/Footer';
import { useStaticQuery, graphql } from 'gatsby';

const Template = ({ children, hero }) => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsHome {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <>
        <HelmetDatoCms seo={data.datoCmsHome.seoMetaTags} />
        <GlobalStyle />
        <Navbar isPost={hero.isPost} />
        <HeroTemplate {...hero} />
        <div id="start" />
        {children}
        <Footer />
      </>
    </ThemeProvider>
  );
};

Template.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  hero: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.bool])
  ).isRequired,
};

export default Template;
