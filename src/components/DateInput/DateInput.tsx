import React from 'react';
import { Controller, Control, FieldError } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { StyledLabel, StyledMessage } from 'components/Input/Input.css';
import { StyledWrapper } from './DateInput.css';
import './customDatePicker.css';

interface DateInputProps {
  control: Control<Record<string, any>>;
  name: string;
  header: string;
  maxDate?: Date;
  minDate?: Date;
  error: FieldError | undefined;
}

const DateInput = ({ control, name, header, maxDate, minDate, error }: DateInputProps) => (
  <StyledWrapper>
    <StyledLabel>{header}</StyledLabel>
    <Controller
      name={name}
      control={control}
      rules={{ required: 'Date is required.' }}
      render={({ onChange, value }) => (
        <DatePicker maxDate={maxDate} minDate={minDate} selected={value} onChange={onChange} />
      )}
    />
    {error && <StyledMessage>{error?.message}</StyledMessage>}
  </StyledWrapper>
);

export default DateInput;
