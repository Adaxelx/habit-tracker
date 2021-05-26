import React, { useRef } from 'react';
import { Button } from 'components';
import { Event, AlertTypes } from 'utils';
import { useAlertContext, useUserContext } from 'context';
import { deleteEvent } from 'views/CalendarPage/CalendarPage.api';
import {
  StyledHabbit,
  StyledTime,
  StyledDescription,
  StyledTitle,
  StyledContainer,
  StyledLabel,
} from './Habbit.css';

const { SUCCESS } = AlertTypes;

const Habbit = ({ habbit, handleRefresh }: { habbit: Event; handleRefresh: Function }) => {
  const { title, timeEnd, timeStart, description, label, _id } = habbit;

  const alertC = useRef(useAlertContext());
  const { token } = useUserContext();

  const handleDelete = async () => {
    try {
      await deleteEvent(token, _id);
      alertC.current.showAlert('Succesfuly deleted habbit.', SUCCESS);
      handleRefresh();
    } catch (err) {
      alertC.current.showAlert(err.message);
    }
  };

  return (
    <StyledContainer>
      <Button size="s" mx="0.75rem" noMaxWidth data-testid="edit">
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
    </StyledContainer>
  );
};

export default Habbit;
