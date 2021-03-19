import React from 'react';
import { routes } from 'constants/routes';
import { StyledOpenNav, StyledLink, StyledContainner } from './OpenedNavigation.css';

interface OpenNavProps {
  open: boolean;
  handleClose: Function;
}

const OpenedNavigation = ({ open, handleClose }: OpenNavProps) => (
  <StyledOpenNav open={open}>
    <StyledContainner>
      {routes.map(({ name, link }) => (
        <StyledLink open={open} to={link} key={name} onClick={() => handleClose()}>
          {name}
        </StyledLink>
      ))}
    </StyledContainner>
  </StyledOpenNav>
);

export default OpenedNavigation;
