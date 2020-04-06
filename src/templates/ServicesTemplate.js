/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from 'utils/media';
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

const StyledImg = styled.img`
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
  margin: 0;
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.content.small};
  margin: 14px 0;
`;

const ServicesTemplate = ({ img, heading, paragraph, isMirror }) => {
  return (
    <StyledWrapper isMirror={isMirror}>
      <StyledImg src={require(`../assets/images/${img}`)} alt={heading} />
      <StyledContent>
        <StyledHeading>{heading}</StyledHeading>
        <StyledParagraph>{paragraph}</StyledParagraph>
        <Button>Czytaj więcej</Button>
      </StyledContent>
    </StyledWrapper>
  );
};

ServicesTemplate.propTypes = {
  img: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  isMirror: PropTypes.bool.isRequired,
};

export default ServicesTemplate;
