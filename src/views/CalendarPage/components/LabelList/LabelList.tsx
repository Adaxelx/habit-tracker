import React from 'react';
import { PopUp, Button } from 'components';
import { FormWithLabels } from 'utils';
import { StyledLabel } from 'views/CalendarPage/components/Habbit/Habbit.css';
import { StyledButtonContainer, StyledLabelContainer } from './LabelList.css';

const LabelList = ({ handleClose, open, handleRefresh, labels }: FormWithLabels) => {
  const handleDelete = () => {
    handleRefresh();
  };
  return (
    <PopUp open={open} handleClose={handleClose} header="Label list">
      <>
        {labels?.map((label) => (
          <StyledLabelContainer key={label._id}>
            <StyledButtonContainer>
              <Button size="s" mr="0.75rem" noMaxWidth data-testid="edit">
                Edit label
              </Button>
              <Button size="s" close noMaxWidth data-testid="delete" onClick={handleDelete}>
                X
              </Button>
            </StyledButtonContainer>
            <StyledLabel color={label.color}>{label.title}</StyledLabel>
          </StyledLabelContainer>
        ))}
      </>
    </PopUp>
  );
};

export default LabelList;
