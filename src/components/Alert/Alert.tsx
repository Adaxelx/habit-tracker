import React from 'react';
import { AlertTypes } from 'constants/enums';
import { StyledAlert, StyledWrapper } from './Alert.css';

type AlertProps = {
  children?: string;
  type?: AlertTypes;
};

const Alert = ({ children = 'Ładowanie...', type = AlertTypes.ERROR }: AlertProps) => (
  <StyledWrapper>
    <StyledAlert type={type}>{children}</StyledAlert>
  </StyledWrapper>
);

type MessageProps = {
  error: string;
  loading: boolean;
};

const AlertMessage = ({ error, loading }: MessageProps) =>
  error ? <Alert>{error}</Alert> : loading ? <Alert type={AlertTypes.LOADING} /> : null;

export default AlertMessage;
