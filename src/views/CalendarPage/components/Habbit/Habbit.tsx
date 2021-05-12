import React from 'react';
import { Button } from 'components';
import { Event } from 'utils';
import { StyledHabbit, StyledTime, StyledDescription, StyledTitle } from './Habbit.css';

const Habbit = ({ habbit }: { habbit: Event }) => {
  const { title, timeEnd, timeStart, description } = habbit;
  return (
    <>
      <Button size="s" my="0.75rem" noMaxWidth data-testid="edit">
        Edit habbit
      </Button>
      <Button size="s" close noMaxWidth data-testid="delete">
        X
      </Button>
      <StyledHabbit>
        <StyledTitle>{title}</StyledTitle>
        <StyledTime>{`${timeStart}-${timeEnd}`}</StyledTime>
        <StyledDescription>{description}</StyledDescription>
      </StyledHabbit>
    </>
  );
};

export default Habbit;
