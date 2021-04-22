import React from 'react';
import { weekDays } from 'constants/calendar';
import { useCalendar } from 'hooks';
import { GridProps } from 'utils';
import { CalendarTile, CalendarNavigation } from '..';
import { StyledGrid, StyledDay, StyledDayGrid } from './CalendarGrid.css';

const CalendarGrid = ({ events, month, year }: GridProps) => {
  const [days] = useCalendar(events, month, year);

  return (
    <>
      <CalendarNavigation />
      <StyledDayGrid>
        {weekDays.map((day) => (
          <StyledDay key={day}>{day}</StyledDay>
        ))}
      </StyledDayGrid>
      <StyledGrid>
        {days.map(({ day, events: eventsArr }) => (
          <CalendarTile
            key={day}
            colors={eventsArr.map(({ label }) => (typeof label === 'object' ? label?.color : ''))}
            day={day}
          />
        ))}
      </StyledGrid>
    </>
  );
};

export default CalendarGrid;
