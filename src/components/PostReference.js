/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from 'components/Button';

const StyledWrapper = styled.section`
  height: 100%;
  background: ${({ theme }) => theme.light};
  display: flex;
  flex-direction: column;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const StyledContent = styled.div`
  padding: 20px;
`;

const StyledDate = styled.h5`
  font-size: ${({ theme }) => theme.font.size.date};
  margin: 12px 0;
`;

const StyledHeading = styled.h3`
  margin: 0;
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.content.small};
`;

const PostReference = ({ img, date, heading, paragraph }) => (
  <StyledWrapper>
    <StyledImg src={require(`../assets/images/${img}`)} alt={heading} />
    <StyledContent>
      <StyledDate>{date}</StyledDate>
      <StyledHeading>{heading}</StyledHeading>
      <StyledParagraph>{paragraph}</StyledParagraph>
      <Button>Czytaj więcej</Button>
    </StyledContent>
  </StyledWrapper>
);

PostReference.propTypes = {
  img: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default PostReference;
