import React, { useState } from 'react';
import { Button, DeleteModal } from 'components';
import { HabitProps } from 'utils';
import { useMutation, useDelete } from 'hooks';
import { useUserContext, useRefreshContext } from 'context';
import { checkEvent, deleteEvent } from 'views/CalendarPage/CalendarPage.api';
import { HabitForm } from '..';
import {
  StyledHabit,
  StyledTime,
  StyledDescription,
  StyledTitle,
  StyledContainer,
  StyledLabel,
} from './Habit.css';

const Habit = ({ habit, labels, checked, day }: HabitProps) => {
  const { title, timeEnd, timeStart, description, label, _id } = habit;

  const [open, setOpen] = useState(false);
  const { token } = useUserContext();

  const { handleRefHabit } = useRefreshContext();

  const [mutate, loading] = useMutation({
    request: () => deleteEvent(token, _id),
    refresh: handleRefHabit,
    messageSuccess: 'Successfully deleted habit.',
  });
  const [mutateCheck, loadingC] = useMutation({
    request: () => checkEvent(token, _id, day),
    refresh: handleRefHabit,
    messageSuccess: 'Successful state change.',
  });

  const { handleOpen, show, handleClose, handleDelete } = useDelete(mutate);

  return (
    <>
      <DeleteModal open={show} handleClose={handleClose} handleDelete={handleDelete} />
      <StyledContainer>
        <Button
          size="s"
          mx="0.75rem"
          disabled={!navigator.onLine || loading || loadingC}
          noMaxWidth
          data-testid="edit"
          onClick={() => setOpen(true)}
        >
          Edit Habit
        </Button>
        <Button
          size="s"
          close
          noMaxWidth
          disabled={!navigator.onLine || loading || loadingC}
          data-testid="delete"
          onClick={handleOpen}
        >
          X
        </Button>
        <StyledHabit
          data-testid={`habit${_id}`}
          checked={checked}
          onClick={navigator.onLine && !loading && !loadingC ? () => mutateCheck() : () => {}}
        >
          {label && <StyledLabel color={label.color}>{label.title}</StyledLabel>}
          <StyledTitle>{title}</StyledTitle>
          <StyledTime>{`${timeStart}-${timeEnd}`}</StyledTime>
          <StyledDescription>{description}</StyledDescription>
        </StyledHabit>
        <HabitForm open={open} handleClose={() => setOpen(false)} labels={labels} event={habit} />
      </StyledContainer>
    </>
  );
};

export default Habit;
