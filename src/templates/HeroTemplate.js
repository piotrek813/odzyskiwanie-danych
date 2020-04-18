import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from 'utils/media';
import Img from 'gatsby-image';
import ScrollBtn from 'components/ScrollBtn';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHero = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${({ isPost }) => (!isPost ? '100vh' : '30vh')};
  margin-top: ${({ isPost }) => (!isPost ? '0' : '59px')};

  img {
    object-fit: ${({ fit }) => fit || 'cover'} !important;
    object-position: ${({ position }) =>
      position || 'center center'} !important;
  }

  ${media.small`
      margin-top: ${({ isPost }) => (!isPost ? '0' : '60px')};
  `}

  ${media.big`
      height: ${({ isPost }) => (!isPost ? '100vh' : '65vh')};
  `}
`;

const StyledContent = styled.div`
  ${({ theme, isPost }) =>
    !isPost &&
    `
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: ${theme.white};
    clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%);
  `}
  padding: ${({ isPost }) => (!isPost ? '50px' : '0 39px')};
  width: 100%;

  ${media.big`
    position: absolute;
    color: ${({ theme, isPost }) => (!isPost ? 'inherit' : theme.white)};
    ${({ isPost }) =>
      !isPost &&
      `
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        clip-path: polygon(0 0, 65% 0, 50% 100%, 0% 100%);
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: left;
      `}
  `}
`;

const StyledHeading = styled.h1`
  font-size: ${({ theme, isPost }) =>
    !isPost ? theme.font.size.heading.normal : theme.font.size.heading.post};
  text-transform: uppercase;

  ${media.small`
      font-size: ${({ theme, isPost }) =>
        isPost && theme.font.size.heading.normal};
  `}

  ${media.big`
      font-size: ${({ theme }) => theme.font.size.heading.big};
      text-align: ${({ isPost }) => (!isPost ? 'left' : 'center')};
      grid-column: 1;
      grid-row: 1;
      align-self: end;
      margin: 0;
  `}
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.content.small};

  ${media.big`
      font-size: ${({ theme }) => theme.font.size.heading.medium};
      grid-column: 1;
      grid-row: 2;
      align-self: start;
  `}
`;

const HeroTemplate = ({ fluid, alt, title, heading, paragraph, isPost }) => {
  return (
    <StyledWrapper>
      {!isPost && (
        <StyledContent isPost={isPost}>
          <StyledHeading isPost={isPost}>{heading}</StyledHeading>
          <StyledParagraph>{paragraph}</StyledParagraph>
        </StyledContent>
      )}
      <StyledHero isPost={isPost} fluid={fluid} alt={alt} title={title} />
      {!isPost && <ScrollBtn />}
    </StyledWrapper>
  );
};

HeroTemplate.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
  isPost: PropTypes.bool,
  fluid: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

HeroTemplate.defaultProps = {
  paragraph: '',
  isPost: false,
};

export default HeroTemplate;
