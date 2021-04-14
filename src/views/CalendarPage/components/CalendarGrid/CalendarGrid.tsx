import React from 'react';
import { CalendarTile } from '..';

const colors = ['#4fce23', '#f4ec32'];

const CalendarGrid = () => (
  <>
    <CalendarTile colors={colors} day={1} />
  </>
);

export default CalendarGrid;
