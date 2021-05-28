import React from 'react';
import { DayCardProps } from 'utils';
import { StyledCard, StyledWeekDay } from './DayCard.css';
import { Habbit } from '..';

const DayCard = ({ events, header, active, labels }: DayCardProps) => (
  <StyledCard active={active}>
    <StyledWeekDay>{header}</StyledWeekDay>
    {events.map((event) => (
      <Habbit key={event._id} habbit={event} labels={labels} />
    ))}
  </StyledCard>
);

export default DayCard;
