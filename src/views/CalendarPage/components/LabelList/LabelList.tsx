import React, { useRef } from 'react';
import { useUserContext, useAlertContext, useRefreshContext } from 'context';
import { PopUp } from 'components';
import { AlertTypes, FormWithLabels } from 'utils';
import { deleteLabel } from 'views/CalendarPage/CalendarPage.api';
import { Label } from '..';

const { SUCCESS } = AlertTypes;

const LabelList = ({ handleClose, open, labels }: FormWithLabels) => {
  const { token } = useUserContext();
  const alertC = useRef(useAlertContext());

  const { handleRefHabbit, handleRefLabel } = useRefreshContext();

  const handleDelete = async (id: string) => {
    try {
      await deleteLabel(token, id);
      alertC.current.showAlert('Succesfuly deleted label.', SUCCESS);
      handleRefLabel();
      handleRefHabbit();
    } catch (err) {
      alertC.current.showAlert(err.message);
    }
  };

  return (
    <PopUp open={open} handleClose={handleClose} header="Label list">
      <>
        {labels?.map((label) => (
          <Label label={label} key={label._id} handleDelete={handleDelete} />
        ))}
      </>
    </PopUp>
  );
};

export default LabelList;
