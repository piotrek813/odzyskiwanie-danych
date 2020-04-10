import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MainTemplate from 'templates/MainTemplate';
import ServiceSectionTemplate from 'templates/ServiceSectionTemplate';
import BlogReferenceTemplate from 'templates/BlogReferenceTemplate';

const IndexPage = ({ data }) => (
  <MainTemplate hero={data.datoCmsHome}>
    <>
      {data.allDatoCmsService.edges.map(
        ({ node: { hero, heading, excerpt, slug } }, index) => {
          const isMirror = index % 2 !== 0;
          return (
            <ServiceSectionTemplate
              key={slug}
              slug={slug}
              isMirror={isMirror}
              img={hero}
              heading={heading}
              excerpt={excerpt}
            />
          );
        }
      )}
      <BlogReferenceTemplate data={data.allDatoCmsPost.edges} />
    </>
  </MainTemplate>
);

export const query = graphql`
  query HomeQuery {
    datoCmsHome {
      heading
      paragraph
    }
    allDatoCmsService(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          slug
          heading
          excerpt
          hero {
            fluid(maxWidth: 800, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
        }
      }
    }
    allDatoCmsPost(
      sort: { fields: [meta___firstPublishedAt], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          meta {
            firstPublishedAt(formatString: "YYYY-MM-DD")
          }
          slug
          hero {
            fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
          heading
          content
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default IndexPage;
