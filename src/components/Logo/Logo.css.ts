import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLogo = styled.header`
  position: fixed;
  top: ${({ theme }) => theme.margin.sm};
  width: 100%;
  text-align: center;
  height: ${({ theme }) => theme.sizes.nav};
  line-height: ${({ theme }) => theme.sizes.nav};
  z-index: ${({ theme }) => theme.zIndex.max};
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.media.phone.s}) {
    font-size: ${({ theme }) => theme.font.sizes.xs};
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.common.black};
  text-decoration: none;
`;
