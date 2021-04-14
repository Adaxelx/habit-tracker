import React, { useState, useEffect } from 'react';
import { Alert } from 'components';
import { getISODate } from 'constants/calendar';
import { StyledCenter } from './CalendarPage.css';
import { CalendarGrid } from './components';

// const dummyData = [
//   {
//     title: 'Gra w piłkę',
//     daysOfWeek: [1, 3, 5],
//     timeStart: '17:00',
//     timeEnd: '18:30',
//     dateStart: '2021-04-14',
//     dateEnd: '2021-04-31',
//     label: { title: 'Jkaiś', color: '#4fce23' },
//     description: 'Krótki opis',
//   },
//   {
//     title: 'Siłownia',
//     daysOfWeek: [1, 2, 4, 6],
//     timeStart: '13:00',
//     timeEnd: '14:30',
//     dateStart: '2021-04-14',
//     dateEnd: '2021-04-31',
//     label: { title: 'Jkaiś', color: '#f4ec32' },
//     description: 'Krótki opis',
//   },
// ];

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [labels, setLabels] = useState([]);

  const [actualMonth, setActualMonth] = useState(date.getMonth());
  const [actualYear, setActualYear] = useState(date.getFullYear());

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      console.log(actualMonth, actualYear);
      const from = getISODate(new Date(actualYear, actualMonth, 2));
      const daysInMonth = 33 - new Date(actualYear, actualMonth, 32).getDate();
      const to = getISODate(new Date(actualYear, actualMonth, daysInMonth));
      console.log(from, to);
      try {
        setEvents([]);
        setLabels([]);
        setDate(new Date());
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    fetchEvents();
  }, []);

  console.log(events, labels, actualMonth, actualYear, setActualMonth, setActualYear);

  return (
    <StyledCenter>
      <CalendarGrid />
      <Alert error={error} loading={loading} />
    </StyledCenter>
  );
};

export default CalendarPage;
