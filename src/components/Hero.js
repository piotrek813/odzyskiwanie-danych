import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StyledHero = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${({ isPost }) => (!isPost ? '100vh' : '75vh')};

  img {
    object-fit: ${({ fit }) => fit || 'cover'} !important;
    object-position: ${({ position }) =>
      position || 'center center'} !important;
  }
`;

const Hero = ({ data, isPost }) => (
  <>
    <StyledHero
      isPost={isPost}
      fluid={data.file.childImageSharp.fluid}
      alt="disk hero image"
    />
  </>
);

Hero.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  isPost: PropTypes.bool,
};

Hero.defaultProps = {
  isPost: false,
};

export default Hero;
