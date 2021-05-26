import React from 'react';
import { useAlertContext } from 'context';
import { AlertMessage } from 'components';

const AlertsContainer = () => {
  const context = useAlertContext();

  return context.open ? (
    <AlertMessage
      message={context.message}
      handleClose={context.changeVisibility}
      variant={context.variant}
    />
  ) : null;
};

export default AlertsContainer;
