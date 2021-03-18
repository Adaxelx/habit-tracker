import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ClicableProps {
  open: boolean;
}

export const StyledOpenNav = styled.nav<ClicableProps>`
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: ${({ theme }) => `${theme.time.medium}ms`};
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.nav.background};
`;

export const StyledLink = styled(Link)``;
