import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from 'utils/media';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import Button from 'components/Button';

const StyledWrapper = styled.section`
  ${media.small`
      padding: 100px;
  `}

  ${media.big`
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 0;
      align-items: center;
  `}
`;

const StyledImg = styled(Img)`
  width: 100%;
`;

const StyledContent = styled.div`
  padding: 35px;

  ${media.big`
      grid-column: ${({ isMirror }) => (!isMirror ? 'auto' : '1')};
      grid-row: ${({ isMirror }) => (!isMirror ? 'auto' : '1')};
      padding: 50px;
  `}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledHeading = styled.h2`
  font-size: ${({ theme }) => theme.font.size.heading.normal};
  text-transform: uppercase;
  margin: 0;
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.content.small};
  margin: 14px 0;
`;

const ServiceSectionTemplate = ({ img, heading, excerpt, slug, isMirror }) => {
  return (
    <StyledWrapper>
      <Link to={`/${slug}`}>
        <StyledImg fluid={img.fluid} alt={img.alt} title={img.title} />
      </Link>
      <StyledContent isMirror={isMirror}>
        <StyledLink to={`/${slug}`}>
          <StyledHeading>{heading}</StyledHeading>
        </StyledLink>
        <StyledParagraph>{excerpt}</StyledParagraph>
        <Button to={`/${slug}`}>Czytaj więcej</Button>
      </StyledContent>
    </StyledWrapper>
  );
};

ServiceSectionTemplate.propTypes = {
  img: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ).isRequired,
  heading: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  isMirror: PropTypes.bool.isRequired,
};

export default ServiceSectionTemplate;
