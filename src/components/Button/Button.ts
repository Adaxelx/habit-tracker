import styled from 'styled-components';

interface ButtonProps {
  size?: string;
  noMaxWidth?: boolean;
  as?: any;
  mt?: string;
  my?: string;
}

const Button = styled.button<ButtonProps>`
  color: ${({ theme }) => theme.colors.button.text};
  background-color: ${({ theme }) => theme.colors.button.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme, size }) => (size ? theme.margin[size] : theme.margin.s)};
  font-size: ${({ theme, size }) => (size ? theme.font.sizes[size] : theme.font.sizes.s)};
  min-width: ${({ noMaxWidth }) => (noMaxWidth ? 'none' : '150px')};
  display: inline-block;
  text-align: center;
  margin-top: ${({ mt }) => mt || 0};
  margin-left: ${({ my }) => my || 0};
  margin-right: ${({ my }) => my || 0};
  &:hover {
    cursor: pointer;
  }
`;

export default Button;