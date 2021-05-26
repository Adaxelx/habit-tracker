import React, { useRef } from 'react';
import { useUserContext, useAlertContext } from 'context';
import { PopUp, Button } from 'components';
import { FormWithLabels, AlertTypes } from 'utils';
import { StyledLabel } from 'views/CalendarPage/components/Habbit/Habbit.css';
import { deleteLabel } from 'views/CalendarPage/CalendarPage.api';
import { StyledButtonContainer, StyledLabelContainer } from './LabelList.css';

const { SUCCESS } = AlertTypes;

const LabelList = ({ handleClose, open, handleRefresh, labels }: FormWithLabels) => {
  const { token } = useUserContext();
  const alertC = useRef(useAlertContext());

  const handleDelete = async (id: string) => {
    try {
      await deleteLabel(token, id);
      alertC.current.showAlert('Succesfuly deleted label.', SUCCESS);
      handleRefresh();
    } catch (err) {
      alertC.current.showAlert(err.message);
    }
  };

  return (
    <PopUp open={open} handleClose={handleClose} header="Label list">
      <>
        {labels?.map(({ _id, title, color }) => (
          <StyledLabelContainer key={_id}>
            <StyledButtonContainer>
              <Button size="s" mr="0.75rem" noMaxWidth data-testid="edit">
                Edit label
              </Button>
              <Button
                size="s"
                close
                noMaxWidth
                data-testid="delete"
                onClick={() => handleDelete(_id)}
              >
                X
              </Button>
            </StyledButtonContainer>
            <StyledLabel color={color}>{title}</StyledLabel>
          </StyledLabelContainer>
        ))}
      </>
    </PopUp>
  );
};

export default LabelList;
