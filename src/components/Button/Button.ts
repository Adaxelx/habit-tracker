import styled from 'styled-components';

interface ButtonProps {
  size?: string;
  noMaxWidth?: boolean;
  as?: any;
  mt?: string;
  mx?: string;
  mr?: string;
  close?: boolean;
}

const Button = styled.button<ButtonProps>`
  color: ${({ theme, close }) => (close ? theme.colors.common.black : theme.colors.button.text)};
  background-color: ${({ theme, close }) =>
    close ? theme.colors.error.main : theme.colors.button.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme, size }) => (size ? theme.margin[size] : theme.margin.s)};
  font-size: ${({ theme, size }) => (size ? theme.font.sizes[size] : theme.font.sizes.s)};
  min-width: ${({ noMaxWidth }) => (noMaxWidth ? 'none' : '150px')};
  display: inline-block;
  text-align: center;
  margin-top: ${({ mt }) => mt || 0};
  margin-left: ${({ mx }) => mx || 0};
  margin-right: ${({ mx, mr }) => mr || mx || 0};
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
