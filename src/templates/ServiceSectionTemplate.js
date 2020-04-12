import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from 'utils/media';
import Img from 'gatsby-image';
import Button from 'components/Button';

const StyledWrapper = styled.section`
  ${media.small`
      padding: 100px;
  `}

  ${media.big`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: ${({ isMirror }) => (!isMirror ? 'row' : 'row-reverse')};
      padding: 0;
  `}
`;

const StyledImg = styled(Img)`
  width: 100%;

  ${media.big`
      width: 50%;
  `}
`;

const StyledContent = styled.div`
  padding: 35px;

  ${media.big`
      padding: 50px;
      width: 50%;
  `}
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
    <StyledWrapper isMirror={isMirror}>
      <StyledImg fluid={img.fluid} alt={img.alt} title={img.title} />
      <StyledContent>
        <StyledHeading>{heading}</StyledHeading>
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
