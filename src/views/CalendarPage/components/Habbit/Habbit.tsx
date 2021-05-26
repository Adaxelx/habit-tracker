import React from 'react';
import { Button } from 'components';
import { Event } from 'utils';
import {
  StyledHabbit,
  StyledTime,
  StyledDescription,
  StyledTitle,
  StyledContainer,
  StyledLabel,
} from './Habbit.css';

const Habbit = ({ habbit }: { habbit: Event }) => {
  const { title, timeEnd, timeStart, description, label } = habbit;
  return (
    <StyledContainer>
      <Button size="s" mx="0.75rem" noMaxWidth data-testid="edit">
        Edit habbit
      </Button>
      <Button size="s" close noMaxWidth data-testid="delete">
        X
      </Button>
      <StyledHabbit>
        {label && <StyledLabel color={label.color}>{label.title}</StyledLabel>}
        <StyledTitle>{title}</StyledTitle>
        <StyledTime>{`${timeStart}-${timeEnd}`}</StyledTime>
        <StyledDescription>{description}</StyledDescription>
      </StyledHabbit>
    </StyledContainer>
  );
};

export default Habbit;
