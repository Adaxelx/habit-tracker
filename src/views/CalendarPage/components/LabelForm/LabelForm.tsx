import React, { useRef } from 'react';
import { PopUp, Button, Input } from 'components';
import { useForm, Controller } from 'react-hook-form';
import { useAlertContext, useUserContext } from 'context';
import { FormProps, LabelSend, createRestrictedLengthObject, AlertTypes } from 'utils';
import { SketchPicker } from 'react-color';
import { StyledWrapper } from 'views/CalendarPage/components/HabbitForm/HabbitForm.css';
import { postLabel } from 'views/CalendarPage/CalendarPage.api';

const { SUCCESS } = AlertTypes;

const LabelForm = ({ handleClose, open, handleRefresh }: FormProps) => {
  const { register, handleSubmit, errors, control } = useForm<LabelSend>();

  const alertC = useRef(useAlertContext());
  const { token } = useUserContext();

  const onSubmit = async (data: LabelSend) => {
    try {
      await postLabel(token, data);
      alertC.current.showAlert('Succesfuly added label to your calendar.', SUCCESS);
      handleClose();
      handleRefresh();
    } catch (err) {
      alertC.current.showAlert(err.message);
    }
  };

  return (
    <PopUp open={open} handleClose={handleClose} header="Add label">
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
        <Controller
          name="color"
          control={control}
          render={({ onChange, value }) => (
            <SketchPicker color={value} onChangeComplete={(color) => onChange(color.hex)} />
          )}
        />
        <Button size="s" mt="16px" type="submit" data-testid="submit" noMaxWidth>
          Send
        </Button>
      </StyledWrapper>
    </PopUp>
  );
};

export default LabelForm;
