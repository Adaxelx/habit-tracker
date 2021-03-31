import React from 'react';
import paths from 'constants/paths';
import { StyledLogo, StyledLink } from './Logo.css';

const Logo = () => (
  <StyledLogo>
    <StyledLink to={paths.DASHBOARD}>
      <h1>Habbit tracker</h1>
    </StyledLink>
  </StyledLogo>
);

export default Logo;
