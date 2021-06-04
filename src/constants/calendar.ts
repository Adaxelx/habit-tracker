/* eslint-disable prefer-const */

export const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
export const weekDaysFull = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'Juny',
  'Juni',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getISODate = (date: Date) => date.toISOString().match(/\d{4}-\d{2}-\d{2}/)![0];

export const getDayParsed = (date: Date) => {
  let firstDay = date.getDay();

  if (firstDay === 0) {
    firstDay = 7;
  }
  firstDay -= 1;
  return firstDay;
};

export const generateParsedDate = (date: Date) => {
  const [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDate()];
  return `${year}-${month < 9 ? `0${month + 1}` : month + 1}-${day < 10 ? `0${day}` : day}`;
};

export const reversedParsedDate = (date: Date) =>
  generateParsedDate(date).split('-').reverse().join('.');

export const generateWeek = (day: Date): [Date, Date] => {
  const from = new Date(day.getTime());

  from.setDate(day.getDate() - 3);
  from.setHours(0, 0, 0, 0);

  const to = new Date(day);
  to.setDate(day.getDate() + 3);
  to.setHours(0, 0, 0, 0);
  return [from, to];
};
