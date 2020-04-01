import styled from 'styled-components';

const Footer = styled.footer`
  background: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.white};
  text-align: center;
  padding: 35px 50px;
`;

export default Footer;
