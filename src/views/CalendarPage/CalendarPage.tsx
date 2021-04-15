import React, { useEffect, useState } from 'react';
import { useUserContext } from 'context';
import { getISODate, Event, Label } from 'constants/calendar';
import { StyledCenter } from './CalendarPage.css';
import { CalendarGrid } from './components';
import { getEvents, getLabels } from './CalendarPage.api';

/* eslint-disable */

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [actualMonth, setActualMonth] = useState(date.getMonth());
  const [actualYear, setActualYear] = useState(date.getFullYear());
  const [events, setEvents] = useState([]);
  const [labels, setLabels] = useState([]);
  const { token } = useUserContext();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const from = getISODate(new Date(actualYear, actualMonth, 2));
        const daysInMonth = 33 - new Date(actualYear, actualMonth, 32).getDate();
        const to = getISODate(new Date(actualYear, actualMonth, daysInMonth));
        const response = await getEvents(token, from, to);
        setEvents(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getLabels(token);
        setLabels(response);
        const mappedResponse = response.map((event: Event) => {
          const label = response.filter((label: Label) => event.label === label._id)[0];
          return { ...event, label };
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchEvents();
  }, []);
  console.log(events);
  return (
    <StyledCenter>
      <CalendarGrid events={events} />
    </StyledCenter>
  );
};

export default CalendarPage;
