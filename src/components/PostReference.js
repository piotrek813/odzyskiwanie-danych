import React from 'react';
import styled from 'styled-components';
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
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
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
    <StyledImg fluid={img.fluid} alt={heading} />
    <StyledContent>
      <StyledDate>{date}</StyledDate>
      <StyledHeading>{heading}</StyledHeading>
      {!isSmall && (
        <>
          <StyledParagraph>{paragraph.substr(0, 300)}</StyledParagraph>
          <StyledButton to={`/blog/${slug}`} marginreverse={isBig}>
            Czytaj więcej
          </StyledButton>
        </>
      )}
      {isSmall && <StyledLink to={`/blog/${slug}`} />}
    </StyledContent>
  </StyledWrapper>
);

PostReference.propTypes = {
  slug: PropTypes.string.isRequired,
  img: PropTypes.objectOf(PropTypes.object).isRequired,
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
