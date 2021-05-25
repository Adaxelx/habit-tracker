import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { StyledLabel, StyledInputWrapper } from 'components/Input/Input.css';
import { weekDays } from 'constants/calendar';
import { StyledSelect, StyledWeekDay } from './WeekDaysInput.css';

interface WeekInputProps {
  control: Control<Record<string, any>>;
}

const WeekDaysInput = ({ control }: WeekInputProps) => (
  <StyledInputWrapper>
    <StyledLabel>Week days</StyledLabel>
    <Controller
      name="daysOfWeek"
      control={control}
      render={({ onChange, value }) => (
        <StyledSelect
          multiple
          value={value}
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
  </StyledInputWrapper>
);

export default WeekDaysInput;
