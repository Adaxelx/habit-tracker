import React, { useState } from 'react';
import { AlertTypes } from 'constants/enums';
import { StyledWrapper } from './OfflineAlert.css';
import { PlainAlert } from '..';

const OfflineAlert = () => {
  const [visible, setVisible] = useState(true);
  return !navigator.onLine && visible ? (
    <StyledWrapper onClick={() => setVisible(false)}>
      <PlainAlert type={AlertTypes.LOADING}>
        No internet connnection. Data is loaded from cache.
      </PlainAlert>
    </StyledWrapper>
  ) : null;
};

export default OfflineAlert;
