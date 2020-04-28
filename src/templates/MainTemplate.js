import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Template from 'templates/Template';

const MainTemplate = ({ children, hero }) => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsHome {
        hero {
          fluid(maxWidth: 1600, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsFluid_noBase64
          }
          alt
          title
        }
      }
    }
  `);

  return (
    <Template hero={{ ...data.datoCmsHome.hero, ...hero }}>
      <main>
        <div id="start" />
        {children}
      </main>
    </Template>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  hero: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MainTemplate;
