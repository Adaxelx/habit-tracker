import React from 'react';
import { CalendarTile } from './components';

const colors = ['#4fce23', '#f4ec32'];

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

const Calendar = () => (
  <>
    <CalendarTile colors={colors} />
  </>
);

export default Calendar;
