/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import media from 'utils/media';

const StyledWrapper = styled.section`
  background: ${({ theme }) => theme.white};
  display: grid;
  grid-gap: 5px;
  margin: ${({ isBig }) => (isBig ? '20px 0' : '0')};
  grid-template-columns: 1fr;

  ${media.tablet`
      grid-template-columns: ${({ isBig }) => (isBig ? '1fr 1fr' : '1fr')};
  `}
`;

const StyledImg = styled.img`
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
  ${({ marginReverse }) => `margin-${marginReverse ? 'bottom' : 'top'}: auto;`}
`;

const PostReference = ({ img, date, heading, paragraph, isBig }) => (
  <StyledWrapper isBig={isBig}>
    <StyledImg src={require(`../assets/images/${img}`)} alt={heading} />
    <StyledContent>
      <StyledDate>{date}</StyledDate>
      <StyledHeading>{heading}</StyledHeading>
      <StyledParagraph>{paragraph}</StyledParagraph>
      <StyledButton marginReverse={isBig}>Czytaj więcej</StyledButton>
    </StyledContent>
  </StyledWrapper>
);

PostReference.propTypes = {
  img: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isBig: PropTypes.bool,
};

PostReference.defaultProps = {
  isBig: false,
};

export default PostReference;
