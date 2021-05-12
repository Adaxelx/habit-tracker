import React from 'react';
import { DayCardProps, Event } from 'utils';
import { weekDaysFull } from 'constants/calendar';
import { useQuery } from 'hooks';
import { getEventsInDay } from '../../CalendarPage.api';
import { StyledCard, StyledWeekDay } from './DayCard.css';
import { Habbit } from '..';

const DayCard = ({ day, token }: DayCardProps) => {
  const [year, month, dayNumber] = day.split('-');

  const date = new Date(parseInt(year, 10), parseInt(month, 10), parseInt(dayNumber, 10));
  const from = `${year}-${month.length !== 2 ? `0${parseInt(month, 10) + 1}` : month}-${
    dayNumber.length !== 2 ? `0${dayNumber}` : dayNumber
  }`;

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
