/* eslint-disable react/jsx-filename-extension */
import React, { useState, createContext, useContext } from 'react';

export const AlertContext = createContext({
  open: false,
  message: '',
  setOpen: () => {},
  changeVisibility: () => {},
  changeMessage: () => {},
  showAlert: () => {},
});

const AlertProvider = (props) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState(0); // success
  const data = {
    open,
    message,
    variant,
    changeVisibility: (newOpen) => setOpen(newOpen),
    changeMessage: (newMessage, newVariant = 'danger') => {
      setOpen(false);
      setMessage(newMessage);
      setVariant(newVariant);
    },
    showAlert: (newMessage, newVariant) => {
      data.changeMessage(newMessage, newVariant);
      data.changeVisibility(true);
    },
  };
  return <AlertContext.Provider value={data} {...props} />;
};

export const useAlertContext = () => useContext(AlertContext);

export default AlertProvider;
