import React, { useState } from 'react';
import {
  StyledNavButton,
  StyledTLDot,
  StyledTRDot,
  StyledBLDot,
  StyledBRDot,
  StyledLine,
  StyledRotatedLine,
} from './Navigation.css';
import { OpenedNavigation } from './components';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledNavButton open={open} onClick={() => setOpen((prevState) => !prevState)}>
        <StyledTLDot open={open} />
        <StyledTRDot open={open} />
        <StyledBLDot open={open} />
        <StyledBRDot open={open} />
        <StyledLine open={open} />
        <StyledRotatedLine open={open} />
      </StyledNavButton>
      <OpenedNavigation open={open} handleClose={() => setOpen(false)} />
    </>
  );
};

export default Navigation;
