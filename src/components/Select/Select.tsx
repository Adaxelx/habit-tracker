import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyledInputWrapper, StyledLabel } from 'components/Input/Input.css';
import { StyledSelect } from './Select.css';

interface Option {
  key: string;
  value: string;
}

interface SelectProps<T> {
  options: Array<T>;
  control: Control<Record<string, any>>;
  name: string;
  label: string;
}

const Select = <T extends Option>({ options, control, name, label }: SelectProps<T>) => (
  <StyledInputWrapper>
    <StyledLabel>{label}</StyledLabel>
    <Controller
      name={name}
      control={control}
      render={({ onChange, value }) => (
        <StyledSelect value={value} onChange={onChange}>
          <option key="1" value="">
            ----Brak labelu----
          </option>
          {options.map(({ key, value: val }) => (
            <option key={key} value={key}>
              {val}
            </option>
          ))}
        </StyledSelect>
      )}
    />
  </StyledInputWrapper>
);

export default Select;
