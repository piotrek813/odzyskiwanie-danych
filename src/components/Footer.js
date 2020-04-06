import styled from 'styled-components';
import media from 'utils/media';

const Footer = styled.footer`
  background: ${({ theme }) => theme.dark};
  font-size: ${({ theme }) => theme.font.size.content.small};
  color: ${({ theme }) => theme.white};
  text-align: center;
  padding: 35px 40px;

  ${media.small`
      font-size: ${({ theme }) => theme.font.size.content.medium};
  `}
`;

export default Footer;
