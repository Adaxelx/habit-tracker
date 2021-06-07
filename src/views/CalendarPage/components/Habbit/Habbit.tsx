import React, { useRef, useState } from 'react';
import { Button } from 'components';
import { AlertTypes, HabbitProps } from 'utils';
import { useAlertContext, useUserContext, useRefreshContext } from 'context';
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

const { SUCCESS } = AlertTypes;

const Habbit = ({ habbit, labels, checked, day }: HabbitProps) => {
  const { title, timeEnd, timeStart, description, label, _id } = habbit;

  const [open, setOpen] = useState(false);

  const alertC = useRef(useAlertContext());
  const { token } = useUserContext();

  const { handleRefHabbit } = useRefreshContext();

  const handleDelete = async () => {
    try {
      await deleteEvent(token, _id);
      alertC.current.showAlert('Successfully deleted habbit.', SUCCESS);
      handleRefHabbit();
    } catch (err) {
      alertC.current.showAlert(err.message);
    }
  };

  const handleCheck = async () => {
    try {
      await checkEvent(token, _id, day);
      alertC.current.showAlert('Successful state change.', SUCCESS);
      handleRefHabbit();
    } catch (err) {
      alertC.current.showAlert(err.message);
    }
  };

  return (
    <StyledContainer>
      <Button
        size="s"
        mx="0.75rem"
        disabled={!navigator.onLine}
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
        disabled={!navigator.onLine}
        data-testid="delete"
        onClick={handleDelete}
      >
        X
      </Button>
      <StyledHabbit
        data-testid={`habbit${_id}`}
        checked={checked}
        onClick={navigator.onLine ? () => handleCheck() : () => {}}
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
