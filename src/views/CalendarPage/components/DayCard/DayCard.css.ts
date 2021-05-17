import styled from 'styled-components';

interface CardProps {
  active: boolean;
}

export const StyledCard = styled.div<CardProps>`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.tile.backgroundActive : theme.colors.tile.background};
  min-width: 275px;
  height: 500px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const StyledWeekDay = styled.h3`
  font-size: ${({ theme }) => theme.font.sizes.m};
  margin: ${({ theme }) => theme.margin.m} 0;
  text-align: center;
`;
