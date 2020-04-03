import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import media, { sizes } from 'utils/media';
import Hamburger from './Hamburger';

const MenuWrapper = posed.div({
  visible: {
    applyAtStart: { display: 'flex' },
    opacity: 0.9,
  },
  hidden: {
    applyAtEnd: { display: 'none' },
    opacity: 0,
  },
});

const StyledWrapper = styled.nav`
  position: ${({ isPost }) => (!isPost ? 'absolute' : 'static')};
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ isPost }) => (!isPost ? '13px' : '13px 39px')};
  color: ${({ theme, isPost }) => (!isPost ? theme.white : theme.black)};

  ${media.tablet`
    padding: 34px 50px;
  `}

  ${media.desktop`
      width: 65%;
      color: ${({ theme, isPost }) => (!isPost ? theme.black : theme.white)};
  `}
`;

const StyledLogo = styled.p`
  z-index: 9999;
`;

const StyledHamburger = styled(Hamburger)`
  z-index: 9999;

  ${media.tablet`
    display: none;
  `};
`;

const StyledMenuWrapper = styled(MenuWrapper)`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, isPost }) => (!isPost ? 'inherit' : theme.white)};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  background: ${({ theme }) => theme.black};
  z-index: 9998;

  ${media.tablet`
    position: static;
    background: none;
    width: auto;
    height: auto;
  `}
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.tablet`
      flex-direction: row;
  `}
`;

const StyledItem = styled.li`
  text-transform: uppercase;
  padding: 25px;
  width: 100%;
  text-align: center;

  ${media.tablet`
    padding: 0 30px;
    padding-right: 0;
    width: auto;
  `}
`;

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  handleMenuToggle = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  updateWindowDimensions = () => {
    if (window.innerWidth >= sizes.tablet) {
      this.setState({ isMenuOpen: true });
    } else {
      this.setState({ isMenuOpen: false });
    }
  };

  render() {
    const navItems = [
      'HDD',
      'SSD',
      'RAID',
      'Dyski przenośne',
      'kontakt',
      'blog',
    ];
    const { isMenuOpen, isTablet } = this.state;
    const { isPost } = this.props;
    return (
      <StyledWrapper isPost={isPost}>
        <StyledLogo>logo</StyledLogo>
        <StyledHamburger
          isPost={isPost}
          onClick={this.handleMenuToggle}
          isOpen={isMenuOpen}
        />
        <StyledMenuWrapper
          isPost={isPost}
          isTablet={isTablet}
          pose={isMenuOpen ? 'visible' : 'hidden'}
        >
          <StyledList>
            {navItems.map((item) => (
              <StyledItem key={item}>{item}</StyledItem>
            ))}
          </StyledList>
        </StyledMenuWrapper>
      </StyledWrapper>
    );
  }
}

Navbar.propTypes = {
  isPost: PropTypes.bool,
};

Navbar.defaultProps = {
  isPost: false,
};

export default Navbar;
