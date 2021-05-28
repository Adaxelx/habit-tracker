import React, { useRef } from 'react';
import { PopUp, Input, Button, DateInput, Select } from 'components';
import { useForm } from 'react-hook-form';
import { EventSend, createRestrictedLengthObject, AlertTypes, FormHabbit } from 'utils';
import { useAlertContext, useUserContext, useRefreshContext } from 'context';
import { postEvent } from 'views/CalendarPage/CalendarPage.api';
import { StyledWrapper } from './HabbitForm.css';
import { WeekDaysInput } from '..';

const { SUCCESS } = AlertTypes;

const HabbitForm = ({ handleClose, open, labels, event }: FormHabbit) => {
  const { register, handleSubmit, errors, control } = useForm<EventSend>({
    defaultValues: { title: event?.title, label: event?.label?._id },
  });

  const alertC = useRef(useAlertContext());

  const { token } = useUserContext();
  const { handleRefHabbit } = useRefreshContext();

  const onSubmit = async (data: EventSend) => {
    try {
      await postEvent(token, data);
      alertC.current.showAlert('Succesfuly added habbit to your calendar.', SUCCESS);
      handleClose();
      handleRefHabbit();
    } catch (err) {
      alertC.current.showAlert(err.message);
    }
  };

  return (
    <PopUp open={open} handleClose={handleClose} header="Add habbit">
      <StyledWrapper as="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          name="title"
          label="Title"
          id="title"
          refVal={register(createRestrictedLengthObject('title'))}
          minLength={6}
          maxLength={30}
          error={errors.title}
          data-testid="title"
        />
        <Input
          name="description"
          label="Description"
          id="description"
          refVal={register()}
          error={errors.description}
          data-testid="description"
          type="textarea"
        />
        <WeekDaysInput control={control} />
        <DateInput control={control} name="dateStart" header="Date start" />
        <DateInput control={control} name="dateEnd" header="Date end" />
        <Input
          name="timeStart"
          label="Time start"
          id="timeStart"
          refVal={register()}
          error={errors.timeStart}
          type="time"
          data-testid="timeStart"
        />
        <Input
          name="timeEnd"
          label="Time end"
          id="timeEnd"
          refVal={register()}
          error={errors.timeStart}
          type="time"
          data-testid="timeEnd"
        />
        <Select
          name="label"
          label="Label"
          control={control}
          options={labels?.map(({ _id, title, ...rest }) => ({ key: _id, value: title, ...rest }))}
        />
        <Button size="s" mt="16px" type="submit" data-testid="submit">
          Send
        </Button>
      </StyledWrapper>
    </PopUp>
  );
};

export default HabbitForm;
