import React from 'react';
import { routes } from 'constants/routes';
import { StyledOpenNav, StyledLink } from './OpenedNavigation.css';

interface OpenNavProps {
  open: boolean;
}

const OpenedNavigation = ({ open }: OpenNavProps) => (
  <StyledOpenNav open={open}>
    {routes.map(({ name, link }) => (
      <StyledLink to={link}>{name}</StyledLink>
    ))}
  </StyledOpenNav>
);

export default OpenedNavigation;
