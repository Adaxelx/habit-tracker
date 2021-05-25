/* eslint-disable react/require-default-props */
import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import {
  StyledInputWrapper,
  StyledInput,
  StyledLabel,
  StyledMessage,
  StyledTextArea,
} from './Input.css';

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
}: InputProps &
  InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <StyledInputWrapper>
    <StyledLabel htmlFor={id}>{label}</StyledLabel>
    {type === 'textarea' ? (
      <StyledTextArea error={!!error} id={id} {...rest} ref={refVal} />
    ) : (
      <StyledInput error={!!error} id={id} type={type} {...rest} ref={refVal} />
    )}
    {error && <StyledMessage>{error?.message}</StyledMessage>}
  </StyledInputWrapper>
);

export default Input;
