import React, { useEffect, useCallback } from 'react';
import { PopUp, Input, Button, DateInput, Select } from 'components';
import { FieldError, useForm } from 'react-hook-form';
import { useMutation } from 'hooks';
import { EventSend, createRestrictedLengthObject, FormHabit, createTimeValidation } from 'utils';
import { useUserContext, useRefreshContext } from 'context';
import { postEvent } from 'views/CalendarPage/CalendarPage.api';
import { StyledWrapper } from './HabitForm.css';
import { WeekDaysInput } from '..';

const HabitForm = ({ handleClose, open, labels, event }: FormHabit) => {
  const { register, handleSubmit, errors, control, reset, watch } = useForm<EventSend>({
    defaultValues: {
      timeStart: '00:10',
      timeEnd: '23:50',
      label: '',
      daysOfWeek: [],
      dateStart: '',
      dateEnd: '',
    },
  });

  const { token } = useUserContext();
  const { handleRefHabit } = useRefreshContext();

  const [mutate, loading] = useMutation({
    request: (data: EventSend) => postEvent(token, data, event?._id),
    refresh: [handleClose, handleRefHabit],
    messageSuccess: `Succesfuly ${event?._id ? 'edited' : 'added'} Habit.`,
  });

  useEffect(() => {
    let defaultValues = {};
    if (event) {
      const { label, dateStart, dateEnd } = event;
      defaultValues = {
        ...event,
        label: label?._id,
        dateStart: new Date(dateStart),
        dateEnd: new Date(dateEnd),
      };
      reset(defaultValues);
    }
  }, [event]);

  const onSubmit = async (data: EventSend) => mutate(data);

  const dateStart = watch('dateStart') ? new Date(watch('dateStart')) : undefined;
  const dateEnd = watch('dateEnd') ? new Date(watch('dateEnd')) : undefined;

  const datePlus7 = useCallback((datePassed, diff) => {
    if (datePassed) {
      const date = new Date(datePassed.getTime());
      date.setDate(date.getDate() + diff);
      return date;
    }
    return undefined;
  }, []);

  return (
    <PopUp open={open} handleClose={handleClose} header="Add Habit" disabled={loading}>
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
        <WeekDaysInput control={control} error={(errors.daysOfWeek as unknown) as FieldError} />
        <DateInput
          control={control}
          name="dateStart"
          header="Date start"
          maxDate={datePlus7(dateEnd, -7)}
          error={errors.dateStart}
        />
        <DateInput
          control={control}
          name="dateEnd"
          header="Date end"
          minDate={datePlus7(dateStart, 7)}
          error={errors.dateEnd}
        />
        <Input
          name="timeStart"
          label="Time start"
          id="timeStart"
          refVal={register(createTimeValidation('00:00', watch('timeEnd')))}
          error={errors.timeStart}
          type="time"
          data-testid="timeStart"
        />
        <Input
          name="timeEnd"
          label="Time end"
          id="timeEnd"
          refVal={register(createTimeValidation(watch('timeStart'), '23:59'))}
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
        <Button size="s" mt="16px" type="submit" disabled={loading} data-testid="submit">
          Send
        </Button>
      </StyledWrapper>
    </PopUp>
  );
};

export default HabitForm;
