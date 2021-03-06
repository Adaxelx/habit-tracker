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
  fullHeight?: boolean;
  disabled?: boolean;
}

const PopUp = ({ open, handleClose, header, children, fullHeight, disabled }: PopUpProps) =>
  open ? (
    <>
      {!fullHeight && <StyledBacground onClick={handleClose} />}
      <StyledWrapper fullHeight={fullHeight}>
        <StyledCloseButton
          disabled={disabled}
          type="button"
          data-testid={`${header}-close`}
          onClick={handleClose}
        >
          <StyledLine rotate={45} />
          <StyledLine rotate={-45} />
        </StyledCloseButton>
        <StyledHeader data-testid={`${header}-header`}>{header}</StyledHeader>
        {children}
      </StyledWrapper>
    </>
  ) : null;

export default PopUp;
