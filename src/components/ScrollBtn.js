import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import media from 'utils/media';

const StyledWrapper = styled.a`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  padding-top: 70px;

  ${media.big`
      color: ${({ theme }) => theme.black};
      transform: translateX(-120px);
  `}
`;

const scrollBtnAnimation = keyframes`
  0% {
    opacity: 0;
    transform: rotate(-45deg) translate(0, 0);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(-45deg) translate(-20px, 20px);
  }
`;

const StyledScrollBtn = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -12px;
  width: 24px;
  height: 24px;
  border-left: 1px solid ${({ theme }) => theme.white};
  border-bottom: 1px solid ${({ theme }) => theme.white};
  transform: rotate(-45deg);
  animation: ${scrollBtnAnimation} 1.5s ease-out infinite;

  ${media.big`
      border-color: ${({ theme }) => theme.black};
  `}
`;

const ScrollBtn = ({ to }) => (
  <StyledWrapper href={`#${to}`}>
    <StyledScrollBtn />
    Przesuń w dół
  </StyledWrapper>
);

ScrollBtn.propTypes = {
  to: PropTypes.string,
};

ScrollBtn.defaultProps = {
  to: 'start',
};

export default ScrollBtn;
