import React from 'react';
import { PopUp, Button, Input } from 'components';
import { useForm, Controller } from 'react-hook-form';
import { useUserContext, useRefreshContext } from 'context';
import { FormLabel, LabelSend, createRestrictedLengthObject } from 'utils';
import { SketchPicker } from 'react-color';
import { StyledWrapper } from 'views/CalendarPage/components/HabitForm/HabitForm.css';
import { postLabel } from 'views/CalendarPage/CalendarPage.api';
import { useMutation } from 'hooks';

const LabelForm = ({ handleClose, open, label }: FormLabel) => {
  const { register, handleSubmit, errors, control } = useForm<LabelSend>({
    defaultValues: { color: '#50E3C2', ...label },
  });
  const { token } = useUserContext();

  const { handleRefLabel } = useRefreshContext();

  const [mutate, loading] = useMutation({
    request: (data: LabelSend) => postLabel(token, data, label?._id),
    refresh: [handleClose, handleRefLabel],
    messageSuccess: `Succesfuly ${label?._id ? 'edited' : 'added'} label.`,
  });

  const onSubmit = async (data: LabelSend) => mutate(data);

  return (
    <PopUp
      open={open}
      handleClose={handleClose}
      header="Add label"
      fullHeight={!!label?._id}
      disabled={loading}
    >
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
        <Button disabled={loading} size="s" mt="16px" type="submit" data-testid="submit">
          Send
        </Button>
      </StyledWrapper>
    </PopUp>
  );
};

export default LabelForm;
