import React from 'react';
import { weekDays, months } from 'constants/calendar';
import { GridProps } from 'utils';
import { CalendarTile, CalendarNavigation } from '..';
import { StyledGrid, StyledDay, StyledDayGrid, StyledCalendar } from './CalendarGrid.css';

const CalendarGrid = ({ days, month, year, moveDate, handleDayChange }: GridProps) => (
  <StyledCalendar>
    <CalendarNavigation navId="main" header={`${months[month]} ${year}`} moveDate={moveDate} />
    <StyledDayGrid>
      {weekDays.map((day) => (
        <StyledDay key={day}>{day}</StyledDay>
      ))}
    </StyledDayGrid>
    <StyledGrid>
      {days.map(({ id, day, events: eventsArr, date }) => (
        <CalendarTile
          key={id}
          handleDayChange={() => handleDayChange(date)}
          colors={eventsArr.map(({ label }) => {
            if (label?.color) {
              return label.color;
            }
            return '#dedede';
          })}
          day={day}
        />
      ))}
    </StyledGrid>
  </StyledCalendar>
);

export default CalendarGrid;
