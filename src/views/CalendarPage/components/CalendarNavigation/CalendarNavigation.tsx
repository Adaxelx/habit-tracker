import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { StyledNavigation, StyledButton, StyledTitle } from './CalendarNavigation.css';

const CalendarNavigation = () => (
  <StyledNavigation>
    <StyledButton>
      <FontAwesomeIcon icon={faCaretLeft} />
    </StyledButton>
    <StyledTitle>Marzec 2021</StyledTitle>
    <StyledButton>
      <FontAwesomeIcon icon={faCaretRight} />
    </StyledButton>
  </StyledNavigation>
);

export default CalendarNavigation;
