import React from 'react';
import { graphql } from 'gatsby';
import MainTemplate from 'templates/MainTemplate';
import HeroTemplate from 'templates/HeroTemplate';

// eslint-disable-next-line react/prop-types
const IndexPage = ({ data }) => (
  <MainTemplate>
    <HeroTemplate data={data} />
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

export default IndexPage;
