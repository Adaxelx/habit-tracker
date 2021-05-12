import React from 'react';
import { weekDays } from 'constants/calendar';
import { useCalendar } from 'hooks';
import { GridProps } from 'utils';
import { CalendarTile, CalendarNavigation } from '..';
import { StyledGrid, StyledDay, StyledDayGrid, StyledCalendar } from './CalendarGrid.css';

const CalendarGrid = ({ events, month, year, moveDate }: GridProps) => {
  const [days] = useCalendar(events, month, year);

  return (
    <StyledCalendar>
      <CalendarNavigation moveDate={moveDate} month={month} year={year} />
      <StyledDayGrid>
        {weekDays.map((day) => (
          <StyledDay key={day}>{day}</StyledDay>
        ))}
      </StyledDayGrid>
      <StyledGrid>
        {days.map(({ id, day, events: eventsArr }) => (
          <CalendarTile
            key={id}
            colors={eventsArr.map(({ label, _id: idEvent }) =>
              typeof label === 'object' ? { color: label?.color, id: `${idEvent}${id}` } : {},
            )}
            day={day}
          />
        ))}
      </StyledGrid>
    </StyledCalendar>
  );
};

export default CalendarGrid;