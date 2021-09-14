import React, { useState } from 'react';
import { AlertTypes } from 'constants/enums';
import { StyledWrapper } from './OfflineAlert.css';
import { PlainAlert, Portal } from '..';

const OfflineAlert = () => {
  const [visible, setVisible] = useState(true);
  return !navigator.onLine && visible ? (
    <Portal>
      <StyledWrapper onClick={() => setVisible(false)}>
        <PlainAlert type={AlertTypes.LOADING}>
          No internet connnection. Data is loaded from cache.
        </PlainAlert>
      </StyledWrapper>
    </Portal>
  ) : null;
};

export default OfflineAlert;
