import React from 'react';
import { DayCardProps, Event } from 'utils';
import { getISODate, weekDaysFull } from 'constants/calendar';
import { useQuery } from 'hooks';
import { getEventsInDay } from '../../CalendarPage.api';
import { StyledCard, StyledWeekDay } from './DayCard.css';
import { Habbit } from '..';

const DayCard = ({ day, actualMonth, actualYear, token }: DayCardProps) => {
  const date = new Date(actualYear, actualMonth, day + 1);
  const from = getISODate(date);

  const [eventsF] = useQuery<Event>([from, token], () => getEventsInDay(token, from));

  let weekDay = date.getDay() - 1;

  if (weekDay === -1) {
    weekDay = 6;
  }

  return (
    <StyledCard>
      <StyledWeekDay>{`${weekDaysFull[weekDay]}`}</StyledWeekDay>
      {eventsF.map((event) => (
        <Habbit key={event._id} habbit={event} />
      ))}
    </StyledCard>
  );
};

export default DayCard;
