import React from 'react';
import { DayCardProps } from 'utils';
import { StyledCard, StyledWeekDay } from './DayCard.css';
import { Habbit } from '..';

const DayCard = ({ events, header, active, labels, date }: DayCardProps) => {
  const [yearA, monthA, dayA] = date;
  return (
    <StyledCard data-testid={`${yearA}-${monthA}-${dayA}`} active={active}>
      <StyledWeekDay>{header}</StyledWeekDay>
      {events.map((event) => (
        <Habbit
          key={event._id}
          habbit={event}
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
