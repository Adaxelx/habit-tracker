import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import { SIDES, NavProps } from 'utils';
import { StyledNavigation, StyledButton, StyledTitle } from './CalendarNavigation.css';

const CalendarNavigation = ({ header, moveDate, navId }: NavProps) => (
  <StyledNavigation>
    <StyledButton data-testid={`moveLeft-${navId}`} onClick={() => moveDate(SIDES.LEFT)}>
      <FontAwesomeIcon icon={faCaretLeft} />
    </StyledButton>
    <StyledTitle data-testid={`dateCalendar-${navId}`}>{header}</StyledTitle>
    <StyledButton data-testid={`moveRight-${navId}`} onClick={() => moveDate(SIDES.RIGHT)}>
      <FontAwesomeIcon icon={faCaretRight} />
    </StyledButton>
  </StyledNavigation>
);

export default CalendarNavigation;
