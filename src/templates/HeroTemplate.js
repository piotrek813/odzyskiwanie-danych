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
  position: ${({ isPost }) => (!isPost ? 'absolute' : 'static')};
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${({ isPost }) => (!isPost ? '100vh' : '30vh')};

  img {
    object-fit: ${({ fit }) => fit || 'cover'} !important;
    object-position: ${({ position }) =>
      position || 'center center'} !important;
  }
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

  ${media.desktop`
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    clip-path: polygon(0 0, 65% 0, 50% 100%, 0% 100%);
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: left;
  `}
`;

const StyledHeading = styled.h1`
  font-size: ${({ theme, isPost }) =>
    !isPost ? theme.font.size.heading.normal : theme.font.size.heading.post};
  text-transform: uppercase;

  ${media.desktop`
      font-size: ${({ theme }) => theme.font.size.heading.big};
      grid-column: 1;
      grid-row: 1;
      align-self: end;
      margin: 0;
  `}
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.content.medium};

  ${media.desktop`
      font-size: ${({ theme }) => theme.font.size.heading.medium};
      grid-column: 1;
      grid-row: 2;
      align-self: start;
  `}
`;

const HeroTemplate = ({ data, heading, paragraph, isPost }) => (
  <StyledWrapper>
    <StyledContent isPost={isPost}>
      <StyledHeading isPost={isPost}>{heading}</StyledHeading>
      <StyledParagraph>{paragraph}</StyledParagraph>
    </StyledContent>
    <StyledHero
      isPost={isPost}
      position="20% 90%"
      fluid={data.file.childImageSharp.fluid}
      alt="disk hero image"
    />
    {!isPost && <ScrollBtn />}
  </StyledWrapper>
);

HeroTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
  isPost: PropTypes.bool,
};

HeroTemplate.defaultProps = {
  paragraph: '',
  isPost: false,
};

export default HeroTemplate;
