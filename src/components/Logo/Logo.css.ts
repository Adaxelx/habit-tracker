import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLogo = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  text-align: center;
  z-index: ${({ theme }) => theme.zIndex.max};
  @media (min-width: ${({ theme }) => theme.media.phone.s}) {
    font-size: ${({ theme }) => theme.font.sizes.xs};
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.common.black};
  text-decoration: none;
`;
