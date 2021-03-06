/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState, useMemo } from 'react';
import { Alert } from 'components';
import { useUserContext, useRefreshContext } from 'context';
import { getISODate, generateWeek, reversedParsedDate } from 'constants/calendar';
import { useQuery, useCalendar } from 'hooks';
import { SIDES } from 'utils';
import { CalendarTile, Event, Label } from 'utils/types';
import APIpaths from 'constants/APIpaths';
import { StyledCenter } from './CalendarPage.css';
import { DayCardWrapper, CalendarGridView } from './components';
import { getData } from './CalendarPage.api';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [movingDate, setMovingDate] = useState(new Date());

  const [dateFrom, dateTo, firstDayOfMonth, lastDayOfMonth] = useMemo(() => {
    const actualMonth = date.getMonth();
    const actualYear = date.getFullYear();
    const dateFrom = new Date(actualYear, actualMonth, 1);
    dateFrom.setDate(dateFrom.getDate() - 3);
    const daysInMonth = 33 - new Date(actualYear, actualMonth, 32).getDate();
    const dateTo = new Date(actualYear, actualMonth, daysInMonth);
    const lastDayOfMonth = new Date(actualYear, actualMonth, daysInMonth);
    const firstDayOfMonth = new Date(actualYear, actualMonth, 1);
    dateTo.setDate(dateTo.getDate() + 4);
    return [dateFrom, dateTo, firstDayOfMonth, lastDayOfMonth];
  }, [date]);

  const { token } = useUserContext();

  const { refHabit, refLabel } = useRefreshContext();
  const urlEvents = useMemo(
    () => `${APIpaths.EVENTS}?from=${getISODate(dateFrom)}&to=${getISODate(dateTo)}`,
    [firstDayOfMonth, lastDayOfMonth],
  );

  const [events, loadingE, errorE] = useQuery<Event>(
    [firstDayOfMonth, lastDayOfMonth, token, refHabit, refLabel],
    () => getData(urlEvents, token),
    urlEvents,
  );

  const [labels, loadingL, errorL] = useQuery<Label>(
    [token, refLabel],
    () => getData(APIpaths.LABELS, token),
    APIpaths.LABELS,
  );

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
        dateClicked={movingDate}
      />
    </StyledCenter>
  );
};

export default CalendarPage;
