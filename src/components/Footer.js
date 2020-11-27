import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import media from 'utils/media';

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.font.size.content.small};
  color: ${({ theme }) => theme.white};
  text-align: center;
  padding: 35px 40px;

  ${media.small`
      font-size: ${({ theme }) => theme.font.size.content.medium};
  `}

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.link};
    font-weight: ${({ theme }) => theme.font.weight.medium};

    &:hover {
      color: ${({ theme }) => theme.white};
    }
  }
`;

const Footer = () => {
  const { datoCmsFooter } = useStaticQuery(graphql`
    query footerQuery {
      datoCmsFooter {
        contentNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `);

  return (
    <StyledFooter
      dangerouslySetInnerHTML={{
        __html: datoCmsFooter.contentNode.childMarkdownRemark.html,
      }}
    />
  );
};

export default Footer;
