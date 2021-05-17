import styled from 'styled-components';

export const StyledNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.margin.s} 0;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: ${({ theme }) => theme.font.sizes.m};
`;

export const StyledTitle = styled.h3`
  width: 200px;
  text-align: center;
  line-height: 100%;
  margin: 0;
  @media (min-width: ${({ theme }) => theme.media.tablet.s}) {
    width: 400px;
    font-size: ${({ theme }) => theme.font.sizes.ml};
  }
`;
