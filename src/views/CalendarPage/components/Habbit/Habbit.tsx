import React, { useState } from 'react';
import { Button } from 'components';
import { HabbitProps } from 'utils';
import { useMutation } from 'hooks';
import { useUserContext, useRefreshContext } from 'context';
import { checkEvent, deleteEvent } from 'views/CalendarPage/CalendarPage.api';
import { HabbitForm } from '..';
import {
  StyledHabbit,
  StyledTime,
  StyledDescription,
  StyledTitle,
  StyledContainer,
  StyledLabel,
} from './Habbit.css';

const Habbit = ({ habbit, labels, checked, day }: HabbitProps) => {
  const { title, timeEnd, timeStart, description, label, _id } = habbit;

  const [open, setOpen] = useState(false);
  const { token } = useUserContext();

  const { handleRefHabbit } = useRefreshContext();

  const [mutate, loading] = useMutation({
    request: () => deleteEvent(token, _id),
    refresh: handleRefHabbit,
    messageSuccess: 'Successfully deleted habbit.',
  });
  const [mutateCheck, loadingC] = useMutation({
    request: () => checkEvent(token, _id, day),
    refresh: handleRefHabbit,
    messageSuccess: 'Successful state change.',
  });

  return (
    <StyledContainer>
      <Button
        size="s"
        mx="0.75rem"
        disabled={!navigator.onLine || loading || loadingC}
        noMaxWidth
        data-testid="edit"
        onClick={() => setOpen(true)}
      >
        Edit habbit
      </Button>
      <Button
        size="s"
        close
        noMaxWidth
        disabled={!navigator.onLine || loading || loadingC}
        data-testid="delete"
        onClick={mutate}
      >
        X
      </Button>
      <StyledHabbit
        data-testid={`habbit${_id}`}
        checked={checked}
        onClick={navigator.onLine && !loading && !loadingC ? () => mutateCheck() : () => {}}
      >
        {label && <StyledLabel color={label.color}>{label.title}</StyledLabel>}
        <StyledTitle>{title}</StyledTitle>
        <StyledTime>{`${timeStart}-${timeEnd}`}</StyledTime>
        <StyledDescription>{description}</StyledDescription>
      </StyledHabbit>
      <HabbitForm open={open} handleClose={() => setOpen(false)} labels={labels} event={habbit} />
    </StyledContainer>
  );
};

export default Habbit;
