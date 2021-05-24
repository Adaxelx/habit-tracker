import React, { MouseEventHandler } from 'react';
import { StyledWrapper, StyledHeader, StyledCloseButton, StyledLine } from './PopUp.css';

interface PopUpProps {
  open: boolean;
  handleClose: MouseEventHandler<HTMLButtonElement>;
  header: string;
  children: React.ReactChild;
}

const PopUp = ({ open, handleClose, header, children }: PopUpProps) =>
  open ? (
    <StyledWrapper>
      <StyledCloseButton type="button" onClick={handleClose}>
        <StyledLine rotate={45} />
        <StyledLine rotate={-45} />
      </StyledCloseButton>
      <StyledHeader>{header}</StyledHeader>
      {children}
    </StyledWrapper>
  ) : null;

export default PopUp;
