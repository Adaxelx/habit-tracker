import React, { MouseEventHandler } from 'react';
import { PopUp, Input } from 'components';
import { useForm } from 'react-hook-form';
import { Event, createRestrictedLengthObject } from 'utils';
import { StyledWrapper } from './HabbitForm.css';

interface HabbitFormProps {
  open: boolean;
  handleClose: MouseEventHandler<HTMLButtonElement>;
}

const HabbitForm = (props: HabbitFormProps) => {
  const { register, handleSubmit, errors } = useForm<Event>();

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
          refVal={register(createRestrictedLengthObject('login'))}
          minLength={6}
          maxLength={30}
          error={errors.title}
          data-testid="login"
        />
      </StyledWrapper>
    </PopUp>
  );
};

export default HabbitForm;
