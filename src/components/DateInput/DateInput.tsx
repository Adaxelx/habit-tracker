import React from 'react';
import { Controller, Control } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { StyledLabel } from 'components/Input/Input.css';
import { StyledWrapper } from './DateInput.css';
import './customDatePicker.css';

interface DateInputProps {
  control: Control<Record<string, any>>;
  name: string;
  header: string;
}

const DateInput = ({ control, name, header }: DateInputProps) => (
  <StyledWrapper>
    <StyledLabel>{header}</StyledLabel>
    <Controller
      name={name}
      control={control}
      render={({ onChange, value }) => <DatePicker selected={value} onChange={onChange} />}
    />
  </StyledWrapper>
);

export default DateInput;
