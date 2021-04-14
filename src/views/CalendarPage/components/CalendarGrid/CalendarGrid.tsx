import React from 'react';
import { weekDays } from 'constants/calendar';
import { CalendarTile, CalendarNavigation } from '..';
import { StyledGrid, StyledDay, StyledDayGrid } from './CalendarGrid.css';

// const colors = ['#4fce23', '#f4ec32'];

const dummyColors = [
  {
    colors: ['#4fce23'],
  },
  {
    colors: ['#4fce23', '#f4ec32'],
  },
  {
    colors: ['#4fce23', '#f4ec32'],
  },
  {
    colors: ['#4fce23', '#f4ec32'],
  },
  {
    colors: ['#4fce23', '#f4ec32'],
  },
  {
    colors: ['#4fce23', '#f4ec32'],
  },
  {
    colors: ['#4fce23', '#f4ec32'],
  },
  {
    colors: ['#4fce23', '#f4ec32'],
  },
  {
    colors: ['#4fce23', '#f4ec32'],
  },
  {
    colors: ['#4fce23', '#f4ec32'],
  },

  {
    colors: ['#4fce23', '#f4ec32'],
  },
  {
    colors: ['#4fce23', '#f4ec32'],
  },
  {
    colors: ['#4fce23', '#f4ec32'],
  },
  {
    colors: ['#4fce23', '#f4ec32'],
  },
  {
    colors: ['#4fce23', '#f4ec32'],
  },
  {
    colors: ['#4fce23', '#f4ec32'],
  },
  {
    colors: ['#4fce23', '#f4ec32'],
  },
  {
    colors: ['#4fce23', '#f4ec32'],
  },
  {
    colors: ['#4fce23', '#f4ec32'],
  },
  {
    colors: ['#4fce23', '#f4ec32', '#f0d322'],
  },
  {
    colors: ['#4fce23', '#f4ec32', '#f0d322'],
  },
  {
    colors: ['#4fce23', '#f4ec32', '#f0d322'],
  },
  {
    colors: ['#4fce23', '#f4ec32', '#f0d322'],
  },
  {
    colors: ['#4fce23', '#f4ec32', '#f0d322'],
  },
  {
    colors: ['#4fce23', '#f4ec32', '#f0d322', '#4fce23', '#f4ec32', '#f0d322'],
  },
  {
    colors: ['#4fce23', '#f4ec32', '#f0d322'],
  },
  {
    colors: ['#4fce23', '#f4ec32', '#f0d322'],
  },
  {
    colors: ['#4fce23', '#f4ec32', '#f0d322'],
  },
  {
    colors: ['#4fce23', '#f4ec32', '#f0d322'],
  },
  {
    colors: ['#4fce23', '#f4ec32', '#f0d322'],
  },
];

// type GridProps = {
//   handleMonth: MouseEventHandler<HTMLButtonElement>;
//   handleYear: MouseEventHandler<HTMLButtonElement>;
// };

const CalendarGrid = () => (
  <>
    <CalendarNavigation />
    <StyledDayGrid>
      {weekDays.map((day) => (
        <StyledDay key={day}>{day}</StyledDay>
      ))}
    </StyledDayGrid>
    <StyledGrid>
      {dummyColors.map(({ colors }, i) => (
        <CalendarTile key={colors[0]} colors={colors} day={i + 1} />
      ))}
    </StyledGrid>
  </>
);

export default CalendarGrid;
