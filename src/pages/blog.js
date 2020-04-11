import React from 'react';
import { graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MainTemplate from 'templates/MainTemplate';
import PostReference from '../components/PostReference';

const StyledPostsWrapper = styled.main`
  width: 75%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BlogPage = ({ data }) => (
  <MainTemplate hero={data.datoCmsBlog}>
    <HelmetDatoCms seo={data.datoCmsBlog.seoMetaTags} />
    <StyledPostsWrapper>
      {data.allDatoCmsPost.edges.map(
        ({
          node: {
            slug,
            hero,
            title,
            alt,
            meta: { firstPublishedAt },
            heading,
            content,
          },
        }) => (
          <PostReference
            key={slug}
            slug={slug}
            img={hero}
            alt={alt}
            title={title}
            date={firstPublishedAt}
            heading={heading}
            paragraph={content}
            isBig
          />
        )
      )}
    </StyledPostsWrapper>
  </MainTemplate>
);

export const query = graphql`
  query BlogQuery {
    datoCmsBlog {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heading
      paragraph
    }
    allDatoCmsPost(sort: { fields: [meta___firstPublishedAt], order: DESC }) {
      edges {
        node {
          meta {
            firstPublishedAt(formatString: "YYYY-MM-DD")
          }
          slug
          hero {
            fluid {
              ...GatsbyDatoCmsFluid_noBase64
            }
            alt
            title
          }
          heading
          content
        }
      }
    }
  }
`;

BlogPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default BlogPage;
