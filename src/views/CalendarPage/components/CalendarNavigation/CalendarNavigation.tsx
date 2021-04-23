import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { months } from 'constants/calendar';
import { SIDES } from 'utils';
import { StyledNavigation, StyledButton, StyledTitle } from './CalendarNavigation.css';

type NavProps = {
  month: number;
  year: number;
  moveDate: Function;
};

const CalendarNavigation = ({ month, year, moveDate }: NavProps) => (
  <StyledNavigation>
    <StyledButton onClick={() => moveDate(SIDES.LEFT)}>
      <FontAwesomeIcon icon={faCaretLeft} />
    </StyledButton>
    <StyledTitle>{`${months[month]} ${year}`}</StyledTitle>
    <StyledButton onClick={() => moveDate(SIDES.RIGHT)}>
      <FontAwesomeIcon icon={faCaretRight} />
    </StyledButton>
  </StyledNavigation>
);

export default CalendarNavigation;