import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import Button from 'components/Button';
import media from 'utils/media';

const StyledWrapper = styled.section`
  position: relative;
  background: ${({ theme }) => theme.white};
  display: grid;
  grid-gap: 5px;
  margin: ${({ isBig }) => (isBig ? '20px 0' : '0')};
  grid-template-columns: 1fr;

  ${media.medium`
      grid-template-columns: ${({ isBig }) => (isBig ? '1fr 1fr' : '1fr')};
  `}
`;

const StyledImg = styled(Img)`
  width: 100%;

  ${({ isBig }) =>
    isBig
      ? css`
          height: 100%;
          ${media.small`
      height: 400px;
    `}
        `
      : css`
          ${media.u632`
      height: 250px;
    `}
          ${media.medium`
      height: 300px;
    `}
        `}
`;

const StyledContent = styled.div`
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledDate = styled.h5`
  font-size: ${({ theme }) => theme.font.size.date};
  margin: auto 0 12px 0;
`;

const StyledHeading = styled.h3`
  margin: 0;
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.content.small};
`;

const StyledButton = styled(Button)`
  ${({ marginreverse }) => `margin-${marginreverse ? 'bottom' : 'top'}: auto;`}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const PostReference = ({
  slug,
  img,
  date,
  heading,
  paragraph,
  isBig,
  isSmall,
}) => (
  <StyledWrapper isBig={isBig}>
    <Link to={`/blog/${slug}`}>
      <StyledImg
        fluid={img.fluid}
        alt={img.alt}
        title={img.title}
        isBig={isBig}
      />
    </Link>
    <StyledContent>
      <StyledDate>{date}</StyledDate>
      <StyledLink to={`/blog/${slug}`}>
        <StyledHeading>{heading}</StyledHeading>
      </StyledLink>
      {!isSmall && (
        <>
          <StyledParagraph>{paragraph.substr(0, 300)}</StyledParagraph>
          <StyledButton to={`/blog/${slug}`} marginreverse={isBig}>
            Czytaj więcej
          </StyledButton>
        </>
      )}
    </StyledContent>
  </StyledWrapper>
);

PostReference.propTypes = {
  slug: PropTypes.string.isRequired,
  img: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ).isRequired,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isBig: PropTypes.bool,
  isSmall: PropTypes.bool,
};

PostReference.defaultProps = {
  isBig: false,
  isSmall: false,
};

export default PostReference;
