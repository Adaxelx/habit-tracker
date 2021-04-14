import React from 'react';
import { CalendarTile } from '..';
import { StyledGrid } from './CalendarGrid.css';

// const colors = ['#4fce23', '#f4ec32'];

const dummyColors = [
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
    colors: ['#4fce23', '#f4ec32', '#f0d322'],
  },
];

// type GridProps = {
//   handleMonth: MouseEventHandler<HTMLButtonElement>;
//   handleYear: MouseEventHandler<HTMLButtonElement>;
// };

const CalendarGrid = () => (
  <StyledGrid>
    {dummyColors.map(({ colors }, i) => (
      <CalendarTile key={colors[0]} colors={colors} day={i + 1} />
    ))}
  </StyledGrid>
);

export default CalendarGrid;
