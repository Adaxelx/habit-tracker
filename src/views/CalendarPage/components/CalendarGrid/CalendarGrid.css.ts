import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: auto;
  max-width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-top: none;
`;

export const StyledDayGrid = styled(StyledGrid)`
  background-color: ${({ theme }) => theme.colors.calendar.navigation};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: none;
`;

export const StyledDay = styled.div`
  width: ${({ theme }) => `${theme.gridTile.size}px`};
  padding: ${({ theme }) => theme.margin.s};
`;
