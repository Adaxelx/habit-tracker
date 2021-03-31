import React from 'react';
import { StyledInputWrapper, StyledInput, StyledLabel } from './Input.css';

interface InputProps {
  label: string;
  id: string;
  [prop: string]: string;
}

const Input = ({ label, id, ...rest }: InputProps) => (
  <StyledInputWrapper>
    <StyledLabel htmlFor={id}>{label}</StyledLabel>
    <StyledInput id={id} {...rest} />
  </StyledInputWrapper>
);

export default Input;
