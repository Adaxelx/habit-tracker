import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { months } from 'constants/calendar';
import { SIDES, NavProps } from 'utils';
import { StyledNavigation, StyledButton, StyledTitle } from './CalendarNavigation.css';

const CalendarNavigation = ({ month, year, moveDate }: NavProps) => (
  <StyledNavigation>
    <StyledButton data-testid="moveLeft" onClick={() => moveDate(SIDES.LEFT)}>
      <FontAwesomeIcon icon={faCaretLeft} />
    </StyledButton>
    <StyledTitle data-testid="dateCalendar">{`${months[month]} ${year}`}</StyledTitle>
    <StyledButton data-testid="moveRight" onClick={() => moveDate(SIDES.RIGHT)}>
      <FontAwesomeIcon icon={faCaretRight} />
    </StyledButton>
  </StyledNavigation>
);

export default CalendarNavigation;
