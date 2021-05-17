import React, { useState, useMemo } from 'react';
import { Alert, Button } from 'components';
import { useUserContext } from 'context';
import {
  getISODate,
  months,
  moveDateDay,
  moveDateWeek,
  generateWeek,
  reversedParsedDate,
} from 'constants/calendar';
import { useQuery, useWindowSize } from 'hooks';
import { SIDES } from 'utils';
import { DateTuple, Event } from 'utils/types';
import { StyledButtonWrapper, StyledCenter } from './CalendarPage.css';
import { CalendarGrid, CalendarNavigation, DayCardWrapper } from './components';
import { getEvents } from './CalendarPage.api';

/* eslint-disable */

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [actualMonth, setActualMonth] = useState(date.getMonth());
  const [actualYear, setActualYear] = useState(date.getFullYear());
  const from = getISODate(new Date(actualYear, actualMonth, 2));
  const daysInMonth = 33 - new Date(actualYear, actualMonth, 32).getDate();
  const to = getISODate(new Date(actualYear, actualMonth, daysInMonth));
  const { token } = useUserContext();

  const [width] = useWindowSize();

  const [openCard, setOpenCard] = useState(false);
  const [day, setDay] = useState<DateTuple>([actualYear, actualMonth, date.getDate()]);
  const [year, month, dayNumber] = day;

  const [events, loadingE, errorE] = useQuery<Event>([from, to, token], () =>
    getEvents(token, from, to),
  );

  const moveDate = (side: SIDES) => {
    if (side === SIDES.LEFT) {
      if (actualMonth === 0) {
        setActualMonth(11);
        setActualYear((prevYear) => prevYear - 1);
      } else {
        setActualMonth((prevMonth) => prevMonth + side);
      }
    } else {
      if (actualMonth === 11) {
        setActualMonth(0);
        setActualYear((prevYear) => prevYear + 1);
      } else {
        setActualMonth((prevMonth) => prevMonth + side);
      }
    }
  };

  const handleChangeView = (day?: DateTuple) => {
    setOpenCard((prevState) => !prevState);
    if (day) {
      setDay(day);
    }
  };

  const [fromWeek, toWeek] = generateWeek(day);

  const CalendarGridView = useMemo(() => {
    return (
      <>
        <CalendarGrid
          events={events}
          month={actualMonth}
          moveDate={moveDate}
          year={actualYear}
          handleDayChange={handleChangeView}
        />
        <Alert loading={loadingE} error={errorE} />
        <StyledButtonWrapper>
          <Button size="s" noMaxWidth mt="16px" data-testid="addh">
            Add habbit
          </Button>
          <Button size="s" noMaxWidth mt="16px" my="16px" data-testid="addl">
            Add label
          </Button>
          <Button size="s" noMaxWidth mt="16px" data-testid="labell">
            Label list
          </Button>
        </StyledButtonWrapper>
      </>
    );
  }, [events, actualMonth, actualYear, loadingE, errorE]);

  return (
    <StyledCenter>
      {width >= 768 ? (
        <>
          {CalendarGridView}
          <CalendarNavigation
            navId="desktopDay"
            header={`${reversedParsedDate(fromWeek)} - ${reversedParsedDate(toWeek)}`}
            moveDate={(side: SIDES) => moveDateWeek(side, day, setDay)}
          />
          <DayCardWrapper from={fromWeek} to={toWeek} token={token} />
        </>
      ) : !openCard ? (
        CalendarGridView
      ) : (
        <>
          <CalendarNavigation
            navId="mobileDay"
            header={`${dayNumber} ${months[month]} ${year}`}
            moveDate={(side: SIDES) => moveDateDay(side, day, setDay)}
            backToCalendar={() => setOpenCard(false)}
          />
          <DayCardWrapper from={day} to={day} token={token} />
        </>
      )}
    </StyledCenter>
  );
};

export default CalendarPage;
