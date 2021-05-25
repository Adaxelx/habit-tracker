import React, { MouseEventHandler } from 'react';
import { PopUp, Input, Button, DateInput } from 'components';
import { useForm } from 'react-hook-form';
import { Event, createRestrictedLengthObject } from 'utils';
import { StyledWrapper } from './HabbitForm.css';

interface HabbitFormProps {
  open: boolean;
  handleClose: MouseEventHandler<HTMLButtonElement>;
}

const HabbitForm = (props: HabbitFormProps) => {
  const { register, handleSubmit, errors, control } = useForm<Event>();

  const onSubmit = async (data: Event) => {
    console.log(data);
  };

  return (
    <PopUp {...props} header="Add habbit">
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
        <Button size="s" mt="16px" type="submit" data-testid="submit" noMaxWidth>
          Send
        </Button>
      </StyledWrapper>
    </PopUp>
  );
};

export default HabbitForm;
