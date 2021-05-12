import React, { useEffect, useState, useMemo } from 'react';
import { Alert, Button } from 'components';
import { useUserContext } from 'context';
import { getISODate, months } from 'constants/calendar';
import { useQuery, useWindowSize } from 'hooks';
import { Label, SIDES } from 'utils';
import { Event } from 'utils/types';
import { StyledButtonWrapper, StyledCenter } from './CalendarPage.css';
import { CalendarGrid, DayCard, CalendarNavigation } from './components';
import { getEvents, getLabels } from './CalendarPage.api';

/* eslint-disable */

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [actualMonth, setActualMonth] = useState(date.getMonth());
  const [actualYear, setActualYear] = useState(date.getFullYear());

  const from = getISODate(new Date(actualYear, actualMonth, 2));
  const daysInMonth = 33 - new Date(actualYear, actualMonth, 32).getDate();
  const to = getISODate(new Date(actualYear, actualMonth, daysInMonth));
  const { token } = useUserContext();
  const [events, setEvents] = useState<Event[]>([]);
  const [width] = useWindowSize();

  const [openCard, setOpenCard] = useState(false);
  const [day, setDay] = useState(`${actualYear}-${actualMonth}-${date.getDate()}`);
  const [year, month, dayNumber] = day.split('-');

  const [eventsF, loadingE, errorE] = useQuery<Event>([from, to, token], () =>
    getEvents(token, from, to),
  );
  const [labels, loadingL, errorL] = useQuery<Label>([token], () => getLabels(token));

  useEffect(() => {
    if (labels.length !== 0) {
      const mappedResponse: Event[] = eventsF?.map((event: Event) => {
        const label = labels?.filter((label: Label) => event?.label === label?._id)[0];
        return { ...event, label };
      });
      setEvents(mappedResponse);
    }
  }, [eventsF, labels]);

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

  const moveDateDay = (side: SIDES) => {
    const [year, month, dayNumber] = day.split('-');
    const numericYear = parseInt(year, 10);
    const numericMonth = parseInt(month, 10);
    const numericDay = parseInt(dayNumber, 10);
    const daysInMonth = new Date(numericYear, numericMonth + 1, 0).getDate();
    if (side === SIDES.RIGHT) {
      if (numericDay === daysInMonth) {
        if (numericMonth === 11) {
          setDay(`${numericYear + 1}-0-1`);
        } else {
          setDay(`${numericYear}-${numericMonth + 1}-1`);
        }
      } else {
        setDay(`${numericYear}-${numericMonth}-${numericDay + 1}`);
      }
    } else {
      if (numericDay === 1) {
        if (numericMonth === 0) {
          setDay(`${numericYear - 1}-11-31`);
        } else {
          const daysInMonth = new Date(numericYear, numericMonth, 0).getDate();
          setDay(`${numericYear}-${numericMonth - 1}-${daysInMonth}`);
        }
      } else {
        setDay(`${numericYear}-${numericMonth}-${numericDay - 1}`);
      }
    }
  };

  const handleChangeView = (day?: string) => {
    setOpenCard((prevState) => !prevState);
    if (day) {
      setDay(day);
    }
  };

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
        <Alert loading={loadingE || loadingL} error={errorE || errorL} />
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
  }, [events, actualMonth, actualYear, loadingE, loadingL, errorE, errorL]);

  return (
    <StyledCenter>
      {width >= 768 ? (
        <>
          {CalendarGridView}
          <CalendarNavigation
            header={`${dayNumber} ${months[parseInt(month, 10)]} ${year}`}
            moveDate={moveDateDay}
          />
          <DayCard day={day} token={token} />
        </>
      ) : !openCard ? (
        CalendarGridView
      ) : (
        <>
          <CalendarNavigation
            header={`${dayNumber} ${months[parseInt(month, 10)]} ${year}`}
            moveDate={moveDateDay}
          />
          <DayCard day={day} token={token} />
        </>
      )}
    </StyledCenter>
  );
};

export default CalendarPage;
