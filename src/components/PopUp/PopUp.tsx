import { ClickOutside, Portal } from 'components';
import React from 'react';
import {
  StyledWrapper,
  StyledHeader,
  StyledCloseButton,
  StyledLine,
  StyledBacground,
} from './PopUp.css';

interface PopUpProps {
  open: boolean;
  handleClose: () => void;
  header: string;
  children: React.ReactChild;
  fullHeight?: boolean;
  disabled?: boolean;
}

const PopUp = ({ open, handleClose, header, children, fullHeight, disabled }: PopUpProps) => (
  <Portal>
    {open ? (
      <>
        {!fullHeight && <StyledBacground />}
        <ClickOutside onOutsideClick={handleClose}>
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
        </ClickOutside>
      </>
    ) : null}
  </Portal>
);

export default PopUp;
