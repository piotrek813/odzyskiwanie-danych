import styled from 'styled-components';

const Button = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.black};
  padding: 10px 30px;
  font-size: ${({ theme }) => theme.font.size.btn};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export default Button;
