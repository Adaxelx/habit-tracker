import styled from 'styled-components';

export const StyledSelect = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

interface WeekDayProps {
  active: boolean;
}

export const StyledWeekDay = styled.div<WeekDayProps>`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.tile.background : theme.colors.common.white};
  border: 1px solid black;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.font.sizes.m};
`;
