import React from 'react';
import { weekDays, months } from 'constants/calendar';
import { GridProps } from 'utils';
import { CalendarTile, CalendarNavigation } from '..';
import { StyledGrid, StyledDay, StyledDayGrid, StyledCalendar } from './CalendarGrid.css';

const CalendarGrid = ({ days, month, year, moveDate, handleDayChange }: GridProps) => {
  console.log('plae');

  /* podmienic działanie hooka zeby przyjmował events, date-start, date-end. Tutaj mozna to zrobic tam 1-month-year - new Date(year, month, 0).getDate();(zwraca dni w miesiacu)-month-year */

  return (
    <StyledCalendar>
      <CalendarNavigation navId="main" header={`${months[month]} ${year}`} moveDate={moveDate} />
      <StyledDayGrid>
        {weekDays.map((day) => (
          <StyledDay key={day}>{day}</StyledDay>
        ))}
      </StyledDayGrid>
      <StyledGrid>
        {days.map(({ id, day, events: eventsArr }) => (
          <CalendarTile
            key={id}
            handleDayChange={() => handleDayChange([year, month, day])}
            colors={eventsArr.map(({ label, _id: idEvent }) =>
              label ? { color: label?.color, id: `${idEvent}${id}` } : {},
            )}
            day={day}
          />
        ))}
      </StyledGrid>
    </StyledCalendar>
  );
};

export default CalendarGrid;
