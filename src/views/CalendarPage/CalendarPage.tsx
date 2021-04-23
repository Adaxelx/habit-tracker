import React, { useEffect, useState } from 'react';
import { useUserContext } from 'context';
import { getISODate } from 'constants/calendar';
import { Event, Label, SIDES } from 'utils';
import { StyledCenter } from './CalendarPage.css';
import { CalendarGrid } from './components';
import { getEvents, getLabels } from './CalendarPage.api';

/* eslint-disable */

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [actualMonth, setActualMonth] = useState(date.getMonth());
  const [actualYear, setActualYear] = useState(date.getFullYear());
  const [events, setEvents] = useState<Event[]>([]);
  const [labels, setLabels] = useState([]);
  const { token } = useUserContext();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const from = getISODate(new Date(actualYear, actualMonth, 2));
        const daysInMonth = 33 - new Date(actualYear, actualMonth, 32).getDate();
        const to = getISODate(new Date(actualYear, actualMonth, daysInMonth));
        const responseEvents = await getEvents(token, from, to);
        const responseLabels = await getLabels(token);
        const mappedResponse: Event[] = responseEvents.map((event: Event) => {
          const label = responseLabels.labels.filter(
            (label: Label) => event?.label === label?._id,
          )[0];

          return { ...event, label };
        });
        setEvents(mappedResponse);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEvents();
  }, [actualYear, actualMonth]);

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
    </StyledCenter>
  );
};

export default CalendarPage;