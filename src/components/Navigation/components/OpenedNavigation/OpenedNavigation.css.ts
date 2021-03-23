import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ClicableProps {
  open: boolean;
}

interface LinkProps {
  onClick: Function;
  open: boolean;
}

export const StyledOpenNav = styled.nav<ClicableProps>`
  transform: ${({ open }) => `scale(${open ? '1' : '0'})`};
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: ${({ theme }) => `opacity ${theme.time.medium}ms`};
  width: 100%;
  height: 100vh;
  top: 0;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.nav.background};
`;

export const StyledContainner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledLink = styled(Link)<LinkProps>`
  color: ${({ theme }) => theme.colors.text.nav};
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.sizes.m};
  margin-bottom: ${({ theme }) => theme.margin.m};
  transform: ${({ open }) => `scale(${open ? '1' : '2'}) translateY(${open ? '0px' : '-50px'})`};
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: ${({ theme, open }) => (open ? `${theme.time.medium}ms` : '0')};
`;
