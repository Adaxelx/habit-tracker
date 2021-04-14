import React from 'react';
import { Container } from 'components';
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

const CalendarPage = () => (
  <Container>
    <CalendarGrid />
  </Container>
);

export default CalendarPage;
