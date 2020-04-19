import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import PostReference from 'components/PostReference';

const StyledAside = styled.aside`
  width: 90%;
  margin: 0 auto;
`;

const SideBarPost = () => {
  const { allDatoCmsPost } = useStaticQuery(graphql`
    {
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
              fluid(
                maxWidth: 400
                imgixParams: { fm: "jpg", auto: "compress" }
              ) {
                ...GatsbyDatoCmsFluid_noBase64
              }
            }
            heading
            content {
              ... on DatoCmsText {
                text
              }
            }
          }
        }
      }
    }
  `);

  return (
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
            paragraph={content[0].text}
          />
        )
      )}
    </StyledAside>
  );
};
export default SideBarPost;
