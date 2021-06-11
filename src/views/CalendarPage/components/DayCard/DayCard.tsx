import React from 'react';
import { DayCardProps } from 'utils';
import { StyledCard, StyledWeekDay } from './DayCard.css';
import { Habit } from '..';

const DayCard = ({ events, header, active, labels, date }: DayCardProps) => {
  const [yearA, monthA, dayA] = date;
  return (
    <StyledCard data-testid={`${yearA}-${monthA}-${dayA}`} active={active}>
      <StyledWeekDay>{header}</StyledWeekDay>
      {events.map((event) => (
        <Habit
          key={event._id}
          habit={event}
          labels={labels}
          day={date}
          checked={
            event?.checked?.findIndex(
              ({ day, month, year }) => day === dayA && monthA === month && year === yearA,
            ) !== -1
          }
        />
      ))}
    </StyledCard>
  );
};

export default DayCard;
