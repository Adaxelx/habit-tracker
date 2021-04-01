/* eslint-disable react/require-default-props */
import React, { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import { StyledInputWrapper, StyledInput, StyledLabel, StyledMessage } from './Input.css';

interface InputProps {
  label: string;
  refVal: any;
  error?: FieldError;
  rest?: Rest;
}

type Rest = {
  [prop: string]: string;
};

const Input = ({
  label,
  id,
  refVal,
  error,
  type = 'text',
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) => (
  <StyledInputWrapper>
    <StyledLabel htmlFor={id}>{label}</StyledLabel>
    <StyledInput error={!!error} id={id} type={type} {...rest} ref={refVal} />
    {error && <StyledMessage>{error?.message}</StyledMessage>}
  </StyledInputWrapper>
);

export default Input;
