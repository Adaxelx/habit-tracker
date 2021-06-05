import React from 'react';
import { AlertTypes } from 'constants/enums';
import { StyledAlert, StyledWrapper } from './Alert.css';

type AlertProps = {
  children?: string;
  type?: AlertTypes;
};

export const Alert = ({ children = 'Ładowanie...', type = AlertTypes.ERROR }: AlertProps) => (
  <StyledWrapper>
    <StyledAlert data-testid="alert" type={type}>
      {children}
    </StyledAlert>
  </StyledWrapper>
);

type MessageProps = {
  error: string;
  loading: boolean;
  rest?: { [prop: string]: string };
};

const AlertMessage = ({ error, loading, ...rest }: MessageProps) =>
  error ? (
    <Alert {...rest}>{error}</Alert>
  ) : loading ? (
    <Alert {...rest} type={AlertTypes.LOADING} />
  ) : null;

export default AlertMessage;
