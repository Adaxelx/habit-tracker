import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLogo = styled.header`
  position: fixed;
  top: 1rem;
  width: 100%;
  text-align: center;
  height: 50px;
  line-height: 50px;
  z-index: ${({ theme }) => theme.zIndex.max};

  @media (max-width: ${({ theme }) => theme.media.phone.s}) {
    font-size: ${({ theme }) => theme.font.sizes.xs};
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.common.black};
  text-decoration: none;
`;
