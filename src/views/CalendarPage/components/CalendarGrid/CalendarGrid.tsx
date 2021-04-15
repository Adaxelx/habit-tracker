import React from 'react';
import { weekDays, Event } from 'constants/calendar';
import { CalendarTile, CalendarNavigation } from '..';
import { StyledGrid, StyledDay, StyledDayGrid } from './CalendarGrid.css';

type GridProps = {
  events: Event[];
};

const CalendarGrid = ({ events }: GridProps) => (
  <>
    <CalendarNavigation />
    <StyledDayGrid>
      {weekDays.map((day) => (
        <StyledDay key={day}>{day}</StyledDay>
      ))}
    </StyledDayGrid>
    <StyledGrid>
      {events.map(({ _id }) => (
        <CalendarTile key={_id} colors={['#fff']} day={1} />
      ))}
    </StyledGrid>
  </>
);

export default CalendarGrid;
