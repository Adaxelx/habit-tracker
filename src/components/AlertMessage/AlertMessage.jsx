import React from 'react';
import { StyledAlert, StyledScale } from './AlertMessage.css';

const AlertMessage = ({ message, variant, handleClose }) => (
  <StyledScale>
    <StyledAlert type={variant} onClick={() => handleClose(false)}>
      {message}
    </StyledAlert>
  </StyledScale>
);

export default AlertMessage;
