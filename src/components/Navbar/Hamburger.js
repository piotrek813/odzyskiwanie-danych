import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHamburger = styled.button`
  border: none;
  background: none;
  padding: 15px;
`;

const InnerHamburger = styled.div`
  position: relative;
  width: 30px;
  height: 2px;
  background-color: ${({ theme, isOpen, isPost }) =>
    isOpen ? 'transparent' : !isPost ? theme.white : theme.black};
  transition: background-color 0.25s ease-in-out;

  ::after,
  ::before {
    content: '';
    position: absolute;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: ${({ theme, isOpen, isPost }) =>
      isOpen ? theme.white : !isPost ? theme.white : theme.black};
    transition: transform 0.25s ease-in-out, background-color 0.25s ease-in-out;
  }

  ::before {
    top: -8px;
    transform: translateY(${({ isOpen }) => (isOpen ? '8px' : '0')})
      rotate(${({ isOpen }) => (isOpen ? '45deg' : '0')});
  }

  ::after {
    top: 8px;
    transform: translateY(${({ isOpen }) => (isOpen ? '-8px' : '0')})
      rotate(${({ isOpen }) => (isOpen ? '-45deg' : '0')});
  }
`;

const Hamburger = ({ isOpen, isPost, ...props }) => (
  <StyledHamburger {...props}>
    <InnerHamburger isOpen={isOpen} isPost={isPost} />
  </StyledHamburger>
);

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isPost: PropTypes.bool,
};

Hamburger.defaultProps = {
  isPost: false,
};

export default Hamburger;
