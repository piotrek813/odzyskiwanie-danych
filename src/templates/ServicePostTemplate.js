import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import styled from 'styled-components';
import media from 'utils/media';
import Template from 'templates/Template';
import PostReference from 'components/PostReference';

const StyledWrapper = styled.div`
  width: 90%;
  margin: 39px auto 0 auto;
  display: grid;

  ${media.big`
    grid-template-columns: 1fr 300px;
    grid-gap: 50px;
    width: 70%;
  `}
`;

const StyledAside = styled.aside`
  width: 90%;
  margin: 0 auto;
`;

const StyledMain = styled.main`
  font-size: ${({ theme }) => theme.font.size.content.normal};
  text-align: justify;

  & img {
    display: flex;
    margin: 0 auto;
    padding: 30px 0;
    width: 100%;

    ${media.small`
        width: 60%;
    `}
  }
`;

const PostTemplate = ({ data: { datoCmsService, allDatoCmsPost } }) => (
  <Template
    hero={{
      ...datoCmsService.hero,
      heading: datoCmsService.heading,
      isPost: true,
    }}
  >
    <HelmetDatoCms seo={datoCmsService.seoMetaTags} />
    <StyledWrapper>
      <StyledMain
        dangerouslySetInnerHTML={{
          __html: datoCmsService.contentNode.childMarkdownRemark.html,
        }}
      />
      <StyledAside>
        {allDatoCmsPost.edges.map(
          ({
            node: {
              slug,
              heading,
              hero,
              meta: { firstPublishedAt },
              content,
            },
          }) => (
            <PostReference
              isSmall
              key={slug}
              slug={slug}
              img={hero}
              date={firstPublishedAt}
              heading={heading}
              paragraph={content}
            />
          )
        )}
      </StyledAside>
    </StyledWrapper>
  </Template>
);

PostTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export const query = graphql`
  query ServiceQuery($slug: String!) {
    datoCmsService(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heading
      contentNode {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      hero {
        fluid(maxWidth: 1600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid_noBase64
        }
        alt
        title
      }
    }
    allDatoCmsPost(
      sort: { fields: [meta___firstPublishedAt], order: DESC }
      limit: 3
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

export default PostTemplate;
