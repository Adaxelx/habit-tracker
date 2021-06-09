import React from 'react';
import { useUserContext, useRefreshContext } from 'context';
import { PopUp } from 'components';
import { FormWithLabels } from 'utils';
import { deleteLabel } from 'views/CalendarPage/CalendarPage.api';
import { useMutation } from 'hooks';
import { Label } from '..';

const LabelList = ({ handleClose, open, labels }: FormWithLabels) => {
  const { token } = useUserContext();

  const { handleRefHabbit, handleRefLabel } = useRefreshContext();

  const [mutate, loading] = useMutation({
    request: (id: string) => deleteLabel(token, id),
    refresh: [handleRefLabel, handleRefHabbit],
    messageSuccess: 'Succesfuly deleted label.',
  });

  const handleDelete = async (id: string) => mutate(id);

  return (
    <PopUp open={open} handleClose={handleClose} header="Label list" disabled={loading}>
      <>
        {labels?.map((label) => (
          <Label label={label} key={label._id} disabled={loading} handleDelete={handleDelete} />
        ))}
      </>
    </PopUp>
  );
};

export default LabelList;
