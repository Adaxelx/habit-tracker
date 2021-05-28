import React, { useRef, useState } from 'react';
import { Button } from 'components';
import { Event, AlertTypes, Label } from 'utils';
import { useAlertContext, useUserContext, useRefreshContext } from 'context';
import { deleteEvent } from 'views/CalendarPage/CalendarPage.api';
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

const Habbit = ({ habbit, labels }: { habbit: Event; labels: Label[] }) => {
  const { title, timeEnd, timeStart, description, label, _id } = habbit;

  const [open, setOpen] = useState(false);

  const alertC = useRef(useAlertContext());
  const { token } = useUserContext();

  const { handleRefHabbit } = useRefreshContext();

  const handleDelete = async () => {
    try {
      await deleteEvent(token, _id);
      alertC.current.showAlert('Succesfuly deleted habbit.', SUCCESS);
      handleRefHabbit();
    } catch (err) {
      alertC.current.showAlert(err.message);
    }
  };

  return (
    <StyledContainer>
      <Button size="s" mx="0.75rem" noMaxWidth data-testid="edit" onClick={() => setOpen(true)}>
        Edit habbit
      </Button>
      <Button size="s" close noMaxWidth data-testid="delete" onClick={handleDelete}>
        X
      </Button>
      <StyledHabbit>
        {label && <StyledLabel color={label.color}>{label.title}</StyledLabel>}
        <StyledTitle>{title}</StyledTitle>
        <StyledTime>{`${timeStart}-${timeEnd}`}</StyledTime>
        <StyledDescription>{description}</StyledDescription>
      </StyledHabbit>
      <HabbitForm
        open={open}
        handleClose={() => setOpen(false)}
        handleRefresh={() => {}}
        labels={labels}
        refresh={false}
        event={habbit}
      />
    </StyledContainer>
  );
};

export default Habbit;
