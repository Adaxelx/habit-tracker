import React from 'react';
import { weekDays } from 'constants/calendar';
import { useCalendar } from 'hooks';
import { GridProps } from 'utils';
import { CalendarTile, CalendarNavigation } from '..';
import { StyledGrid, StyledDay, StyledDayGrid } from './CalendarGrid.css';

const CalendarGrid = ({ events, month, year, moveDate }: GridProps) => {
  const [days] = useCalendar(events, month, year);

  return (
    <>
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
            colors={eventsArr.map(({ label }, i) =>
              typeof label === 'object' ? { color: label?.color, id: i } : {},
            )}
            day={day}
          />
        ))}
      </StyledGrid>
    </>
  );
};

export default CalendarGrid;
