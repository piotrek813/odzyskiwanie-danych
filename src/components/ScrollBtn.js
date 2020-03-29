import React from 'react';
import styled, { keyframes } from 'styled-components';
import media from 'utils/media';

const StyledWrapper = styled.a`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.light};
  text-decoration: none;
  padding-top: 70px;

  ${media.desktop`
      color: ${({ theme }) => theme.dark};
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
  border-left: 1px solid ${({ theme }) => theme.light};
  border-bottom: 1px solid ${({ theme }) => theme.light};
  transform: rotate(-45deg);
  animation: ${scrollBtnAnimation} 1.5s ease-out infinite;

  ${media.desktop`
      border-color: ${({ theme }) => theme.dark};
  `}
`;

const ScrollBtn = () => (
  <StyledWrapper href="#">
    <StyledScrollBtn />
    Przesuń w dół
  </StyledWrapper>
);

export default ScrollBtn;
