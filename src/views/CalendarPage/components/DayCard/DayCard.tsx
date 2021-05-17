import React from 'react';
import { DayCardProps } from 'utils';
import { StyledCard, StyledWeekDay } from './DayCard.css';
import { Habbit } from '..';

const DayCard = ({ events, header }: DayCardProps) => (
  <StyledCard>
    <StyledWeekDay>{header}</StyledWeekDay>
    {events.map((event) => (
      <Habbit key={event._id} habbit={event} />
    ))}
  </StyledCard>
);

export default DayCard;
