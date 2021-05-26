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
import {
  CalendarGrid,
  CalendarNavigation,
  DayCardWrapper,
  HabbitForm,
  LabelForm,
} from './components';
import { getEvents } from './CalendarPage.api';

/* eslint-disable */

const CalendarPage = () => {
  const [date] = useState(new Date());
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
  const [refresh, setRefresh] = useState(false);
  const [events, loadingE, errorE] = useQuery<Event>([from, to, token, refresh], () =>
    getEvents(token, from, to),
  );

  const [openHabbitForm, setOpenHabbitForm] = useState(false);
  const [openLabelForm, setOpenLabelForm] = useState(false);

  const handleRefresh = () => setRefresh((prev) => !prev);

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

  const [fromWeek, toWeek] = useMemo(() => generateWeek(day), [day]);

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
          <Button
            size="s"
            noMaxWidth
            mt="16px"
            data-testid="addh"
            onClick={() => setOpenHabbitForm(true)}
          >
            Add habbit
          </Button>
          <Button
            size="s"
            noMaxWidth
            mt="16px"
            my="16px"
            data-testid="addl"
            onClick={() => setOpenLabelForm(true)}
          >
            Add label
          </Button>
          <Button size="s" noMaxWidth mt="16px" data-testid="labell">
            Label list
          </Button>
        </StyledButtonWrapper>
        <HabbitForm
          open={openHabbitForm}
          handleClose={() => setOpenHabbitForm(false)}
          handleRefresh={handleRefresh}
          refresh={refresh}
        />
        <LabelForm
          open={openLabelForm}
          handleClose={() => setOpenLabelForm(false)}
          handleRefresh={handleRefresh}
        />
      </>
    );
  }, [events, actualMonth, actualYear, loadingE, errorE, openHabbitForm, openLabelForm]);

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
