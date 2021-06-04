/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState, useMemo } from 'react';
import { Alert } from 'components';
import { useUserContext, useRefreshContext } from 'context';
import { getISODate, generateWeek, reversedParsedDate } from 'constants/calendar';
import { useQuery, useCalendar } from 'hooks';
import { SIDES } from 'utils';
import { CalendarTile, Event, Label } from 'utils/types';
import { StyledCenter } from './CalendarPage.css';
import { DayCardWrapper, CalendarGridView } from './components';
import { getEvents, getLabels } from './CalendarPage.api';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [movingDate, setMovingDate] = useState(new Date());

  const [dateFrom, dateTo, firstDayOfMonth, lastDayOfMonth] = useMemo(() => {
    const actualMonth = date.getMonth();
    const actualYear = date.getFullYear();
    const dateFrom = new Date(actualYear, actualMonth, 1);
    dateFrom.setDate(dateFrom.getDate() - 7);
    const daysInMonth = 33 - new Date(actualYear, actualMonth, 32).getDate();
    const dateTo = new Date(actualYear, actualMonth, daysInMonth);
    const lastDayOfMonth = new Date(actualYear, actualMonth, daysInMonth);
    const firstDayOfMonth = new Date(actualYear, actualMonth, 1);
    dateTo.setDate(dateTo.getDate() + 6);
    return [dateFrom, dateTo, firstDayOfMonth, lastDayOfMonth];
  }, [date]);

  const { token } = useUserContext();

  const { refHabbit, refLabel } = useRefreshContext();

  const [events, loadingE, errorE] = useQuery<Event>(
    [firstDayOfMonth, lastDayOfMonth, token, refHabbit, refLabel],
    () => getEvents(token, getISODate(firstDayOfMonth), getISODate(lastDayOfMonth)),
  );

  const [labels, loadingL, errorL] = useQuery<Label>([token, refLabel], () => getLabels(token));

  const [days]: [CalendarTile[]] = useCalendar(
    events,
    dateFrom,
    dateTo,
    firstDayOfMonth,
    lastDayOfMonth,
  );

  const moveDate = (side: SIDES) => {
    if (side === SIDES.LEFT) {
      setDate((prevDate) => {
        const newDate = new Date(prevDate.getTime());
        return new Date(newDate.setMonth(newDate.getMonth() - 1));
      });
      setMovingDate((prevDate) => {
        const newDate = new Date(prevDate.getTime());
        return new Date(newDate.setMonth(newDate.getMonth() - 1));
      });
    } else {
      setDate((prevDate) => {
        const newDate = new Date(prevDate.getTime());
        return new Date(newDate.setMonth(newDate.getMonth() + 1));
      });
      setMovingDate((prevDate) => {
        const newDate = new Date(prevDate.getTime());
        return new Date(newDate.setMonth(newDate.getMonth() + 1));
      });
    }
  };

  const handleChangeView = (day?: Date) => {
    if (day) {
      setMovingDate(day);
    }
  };

  const [fromWeek, toWeek] = generateWeek(movingDate);

  return (
    <StyledCenter>
      <CalendarGridView
        moveDate={moveDate}
        days={days.filter(({ active }) => active)}
        actualMonth={date.getMonth()}
        actualYear={date.getFullYear()}
        handleChangeView={handleChangeView}
        labels={labels}
      />
      <Alert loading={loadingE || loadingL} error={errorE || errorL} />
      <h2>{`${reversedParsedDate(fromWeek)} - ${reversedParsedDate(toWeek)}`}</h2>
      <DayCardWrapper
        days={days.filter(({ date }) => date && date >= fromWeek && date <= toWeek)}
        labels={labels}
      />
    </StyledCenter>
  );
};

export default CalendarPage;
