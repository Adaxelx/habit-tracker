import React, { MouseEventHandler } from 'react';
import {
  StyledWrapper,
  StyledHeader,
  StyledCloseButton,
  StyledLine,
  StyledBacground,
} from './PopUp.css';

interface PopUpProps {
  open: boolean;
  handleClose: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  header: string;
  children: React.ReactChild;
}

const PopUp = ({ open, handleClose, header, children }: PopUpProps) =>
  open ? (
    <>
      <StyledBacground onClick={handleClose} />
      <StyledWrapper>
        <StyledCloseButton type="button" onClick={handleClose}>
          <StyledLine rotate={45} />
          <StyledLine rotate={-45} />
        </StyledCloseButton>
        <StyledHeader>{header}</StyledHeader>
        {children}
      </StyledWrapper>
    </>
  ) : null;

export default PopUp;
