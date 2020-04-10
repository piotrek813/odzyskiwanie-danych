import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import media from 'utils/media';

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.dark};
  font-size: ${({ theme }) => theme.font.size.content.small};
  color: ${({ theme }) => theme.white};
  text-align: center;
  padding: 35px 40px;

  ${media.small`
      font-size: ${({ theme }) => theme.font.size.content.medium};
  `}
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query footerQuery {
      datoCmsFooter {
        content
      }
    }
  `);

  return <StyledFooter>{data.datoCmsFooter.content}</StyledFooter>;
};

export default Footer;
