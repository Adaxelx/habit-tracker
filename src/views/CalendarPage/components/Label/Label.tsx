import React, { useState } from 'react';
import { Button } from 'components';
import { StyledLabel } from 'views/CalendarPage/components/Habbit/Habbit.css';
import { Label as LabelType } from 'utils';
import { LabelForm } from '..';
import { StyledButtonContainer, StyledLabelContainer } from './Label.css';

const Label = ({ label, handleDelete }: { label: LabelType; handleDelete: Function }) => {
  const { _id, color, title } = label;
  const [openL, setOpenL] = useState(false);
  return (
    <StyledLabelContainer key={_id}>
      <StyledButtonContainer>
        <Button size="s" mr="0.75rem" noMaxWidth data-testid="edit" onClick={() => setOpenL(true)}>
          Edit label
        </Button>
        <Button size="s" close noMaxWidth data-testid="delete" onClick={() => handleDelete(_id)}>
          X
        </Button>
      </StyledButtonContainer>
      <StyledLabel color={color}>{title}</StyledLabel>
      <LabelForm handleClose={() => setOpenL(false)} open={openL} label={label} />
    </StyledLabelContainer>
  );
};

export default Label;
