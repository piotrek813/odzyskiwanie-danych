import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MainTemplate from 'templates/MainTemplate';

const IndexPage = ({ data }) => (
  <MainTemplate data={data}>
    <></>
  </MainTemplate>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "hero-image-disk.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 90) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default IndexPage;
