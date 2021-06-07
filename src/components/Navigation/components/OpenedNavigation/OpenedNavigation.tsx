import React, { useRef } from 'react';
import { routes } from 'constants/routes';
import { useAlertContext, useUserContext } from 'context';
import { AlertTypes } from 'utils';
import { logoutUser } from '../../Navigation.api';
import { StyledOpenNav, StyledLink, StyledContainner, StyledButton } from './OpenedNavigation.css';

const { SUCCESS } = AlertTypes;

interface OpenNavProps {
  open: boolean;
  handleClose: Function;
}

const OpenedNavigation = ({ open, handleClose }: OpenNavProps) => {
  const { token, logout } = useUserContext();
  const alertC = useRef(useAlertContext());

  const handleLogout = async () => {
    try {
      await logoutUser(token);
      alertC.current.showAlert('Successfully logged out', SUCCESS);
      logout();
    } catch (err) {
      alertC.current.showAlert(err.message);
    }
  };

  return (
    <StyledOpenNav open={open}>
      <StyledContainner>
        {routes.map(({ name, link }) => (
          <StyledLink open={open} to={link} key={name} onClick={() => handleClose()}>
            {name}
          </StyledLink>
        ))}
      </StyledContainner>
      {token && (
        <StyledButton
          size="s"
          disabled={!navigator.onLine}
          mx="0.75rem"
          data-testid="logout"
          onClick={handleLogout}
        >
          Logout
        </StyledButton>
      )}
    </StyledOpenNav>
  );
};

export default OpenedNavigation;
