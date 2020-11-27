import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import styled from 'styled-components';
import media from 'utils/media';
import Template from 'templates/Template';
import SideBarPost from 'components/SideBarPost';
import Logo from 'assets/images/icon.png';

const StyledWrapper = styled.div`
  width: 90%;
  margin: 39px auto 0 auto;
  display: grid;
  margin-bottom: 50px;

  ${media.big`
    grid-template-columns: 1fr 300px;
    grid-gap: 50px;
    width: 70%;
  `}
`;

const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.font.size.heading.post};

  ${media.small`
      font-size: ${({ theme }) => theme.font.size.heading.normal};
  `}
`;

const StyledMain = styled.main`
  font-size: ${({ theme }) => theme.font.size.content.normal};
  text-align: justify;
  margin-bottom: 50px;

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.lightenPrimary};
    font-weight: ${({ theme }) => theme.font.weight.medium};

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  & img {
    display: flex;
    margin: 0 auto;
    padding: 30px 0;
    width: 100%;
    /* object-fit: contain !important; */

    ${media.small`
        width: 60%;
    `}
  }

  ${media.big`
      margin-bottom: 0;
  `}
`;

const PostTemplate = ({ data: { datoCmsPost } }) => {
  return (
    <Template
      hero={{
        ...datoCmsPost.hero,
        heading: datoCmsPost.heading,
        isPost: true,
      }}
    >
      <HelmetDatoCms seo={datoCmsPost.seoMetaTags}>
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://odzyskiawniedanych.warszawa.pl/"
          },
          "headline": "${datoCmsPost.heading}",
          "description": "${datoCmsPost.seoMetaTags.tags[3].attributes.content}",
          "image": "${datoCmsPost.hero.fluid.src}",
          "author": {
            "@type": "Organization",
            "name": "All Data Recovery"
          },
          "publisher": {
            "@type": "Organization",
            "name": "All Data Recovery",
            "logo": {
              "@type": "ImageObject",
              "url": "${Logo}",
              "width": 232,
              "height": 110
            }
          },
          "datePublished": "${datoCmsPost.meta.publishedAt},",
          "dateModified": "${datoCmsPost.meta.updatedAt}"
        }
    `}</script>
      </HelmetDatoCms>
      <StyledWrapper>
        <div>
          <header>
            <StyledHeading>{datoCmsPost.heading}</StyledHeading>
          </header>
          <StyledMain>
            {datoCmsPost.content.map((item) => (
              <React.Fragment key={item.id}>
                {item.model.apiKey === 'text' && (
                  <div
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                      __html: item.textNode.childMarkdownRemark.html,
                    }}
                  />
                )}
                {item.model.apiKey === 'img' && <Img {...item.img} />}
              </React.Fragment>
            ))}
          </StyledMain>
        </div>
        <SideBarPost />
      </StyledWrapper>
    </Template>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export const query = graphql`
  query PostQuery($slug: String!) {
    datoCmsPost(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      meta {
        updatedAt(formatString: "YYYY-MM-DD")
        publishedAt(formatString: "YYYY-MM-DD")
      }
      heading
      content {
        ... on DatoCmsText {
          id
          model {
            apiKey
          }
          textNode {
            childMarkdownRemark {
              html
            }
          }
        }
        ... on DatoCmsImg {
          id
          model {
            apiKey
          }
          img {
            fluid(maxWidth: 400) {
              ...GatsbyDatoCmsFluid_noBase64
            }
            alt
            title
          }
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
  }
`;

export default PostTemplate;
