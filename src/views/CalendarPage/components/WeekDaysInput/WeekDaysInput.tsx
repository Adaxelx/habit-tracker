import React from 'react';
import { Controller, Control, FieldError } from 'react-hook-form';
import { StyledLabel, StyledInputWrapper, StyledMessage } from 'components/Input/Input.css';
import { weekDays } from 'constants/calendar';
import { StyledSelect, StyledWeekDay } from './WeekDaysInput.css';

interface WeekInputProps {
  control: Control<Record<string, any>>;
  error?: FieldError | undefined;
}

const WeekDaysInput = ({ control, error }: WeekInputProps) => (
  <StyledInputWrapper>
    <StyledLabel>Week days</StyledLabel>
    <Controller
      name="daysOfWeek"
      control={control}
      rules={{
        validate: (value) => {
          const message = 'Min. 1 week day is required.';
          return value ? value.length !== 0 || message : message;
        },
      }}
      render={({ onChange, value }) => (
        <StyledSelect
          multiple
          value={value}
          required
          onChange={(e) => {
            const selected = e.target.value;
            if (value) {
              let copy = [...value];
              copy = copy.filter((day) => day !== selected);
              if (copy.length === value.length) {
                copy.push(selected);
              }
              onChange(copy);
            } else {
              onChange([selected]);
            }
          }}
        >
          {weekDays.map((weekDay, i) => (
            <StyledWeekDay key={weekDay} value={i}>
              {weekDay}
            </StyledWeekDay>
          ))}
        </StyledSelect>
      )}
    />
    {error && <StyledMessage>{error?.message}</StyledMessage>}
  </StyledInputWrapper>
);

export default WeekDaysInput;
