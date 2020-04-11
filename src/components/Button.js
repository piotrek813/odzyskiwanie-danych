import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledWrapper = styled.button`
  background: none;
  padding: 0;
  border: 0;
`;

const StyledLink = styled(Link)`
  padding: 10px 30px;
  border: 2px solid ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.font.size.btn};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  display: inline-block;
  color: inherit;
  text-decoration: none;
`;

const Button = ({ to, children, ...props }) => (
  <StyledWrapper {...props}>
    <StyledLink to={to}>{children}</StyledLink>
  </StyledWrapper>
);

Button.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
