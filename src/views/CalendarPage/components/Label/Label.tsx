import React, { useState } from 'react';
import { Button, DeleteModal } from 'components';
import { StyledLabel } from 'views/CalendarPage/components/Habbit/Habbit.css';
import { useDelete } from 'hooks';
import { LabelProps } from 'utils';
import { LabelForm } from '..';
import { StyledButtonContainer, StyledLabelContainer } from './Label.css';

const Label = ({ label, handleDelete, disabled }: LabelProps) => {
  const { _id, color, title } = label;
  const [openL, setOpenL] = useState(false);

  const { handleOpen, show, handleClose, handleDelete: handleRemove } = useDelete(() =>
    handleDelete(_id),
  );
  return (
    <>
      <DeleteModal open={show} handleClose={handleClose} handleDelete={handleRemove} />
      <StyledLabelContainer key={_id}>
        <StyledButtonContainer>
          <Button
            size="s"
            mr="0.75rem"
            disabled={!navigator.onLine || disabled}
            noMaxWidth
            data-testid="edit"
            onClick={() => setOpenL(true)}
          >
            Edit label
          </Button>
          <Button
            size="s"
            disabled={!navigator.onLine || disabled}
            close
            noMaxWidth
            data-testid={`delete${_id}`}
            onClick={handleOpen}
          >
            X
          </Button>
        </StyledButtonContainer>
        <StyledLabel color={color}>{title}</StyledLabel>
        <LabelForm handleClose={() => setOpenL(false)} open={openL} label={label} />
      </StyledLabelContainer>
    </>
  );
};

export default Label;
