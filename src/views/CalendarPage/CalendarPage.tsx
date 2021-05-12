import React, { useEffect, useState } from 'react';
import { Alert, Button } from 'components';
import { useUserContext } from 'context';
import { getISODate } from 'constants/calendar';
import { useQuery } from 'hooks';
import { Label, SIDES } from 'utils';
import { Event } from 'utils/types';
import { StyledButtonWrapper, StyledCenter } from './CalendarPage.css';
import { CalendarGrid } from './components';
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

  return (
    <StyledCenter>
      <CalendarGrid events={events} month={actualMonth} moveDate={moveDate} year={actualYear} />
      <Alert loading={loadingE || loadingL} error={errorE || errorL} />
      <StyledButtonWrapper>
        <Button size="s" noMaxWidth mt="16px" type="submit" data-testid="submit">
          Add habbit
        </Button>
        <Button size="s" noMaxWidth mt="16px" my="16px" type="submit" data-testid="submit">
          Add label
        </Button>
        <Button size="s" noMaxWidth mt="16px" type="submit" data-testid="submit">
          Label list
        </Button>
      </StyledButtonWrapper>
    </StyledCenter>
  );
};

export default CalendarPage;
