import styled from 'styled-components';

interface ButtonProps {
  size?: string;
}

const Button = styled.button<ButtonProps>`
  color: ${({ theme }) => theme.colors.button.text};
  background-color: ${({ theme }) => theme.colors.button.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme, size }) => (size ? theme.margin[size] : theme.margin.s)};
  font-size: ${({ theme, size }) => (size ? theme.font.sizes[size] : theme.font.sizes.s)};
  min-width: 150px;
`;

export default Button;
