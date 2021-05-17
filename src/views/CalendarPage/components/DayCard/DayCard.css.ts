import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.tile.background};
  min-width: 275px;
  height: 500px;
`;

export const StyledWeekDay = styled.h3`
  font-size: ${({ theme }) => theme.font.sizes.m};
  margin: ${({ theme }) => theme.margin.m} 0;
  text-align: center;
`;
