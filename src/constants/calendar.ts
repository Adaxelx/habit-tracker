import { DateTuple, SIDES } from 'utils/types';

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

export const calculateDayInYear = (date: string) => {
  const now: any = new Date(date);
  const start: any = new Date(now.getFullYear(), 0, 0);
  const diff = now - start + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

export const getISODate = (date: Date) => date.toISOString().match(/\d{4}-\d{2}-\d{2}/)![0];

export const getDayParsed = (date: Date) => {
  let firstDay = date.getDay();

  if (firstDay === 0) {
    firstDay = 7;
  }
  firstDay -= 1;
  return firstDay;
};

export const moveDateDay = (side: SIDES, day: DateTuple, setDay: Function) => {
  const [numericYear, numericMonth, numericDay] = day;

  const daysInMonth = new Date(numericYear, numericMonth + 1, 0).getDate();
  if (side === SIDES.RIGHT) {
    if (numericDay === daysInMonth) {
      if (numericMonth === 11) {
        setDay([numericYear + 1, 0, 1]);
      } else {
        setDay([numericYear, numericMonth + 1, 1]);
      }
    } else {
      setDay([numericYear, numericMonth, numericDay + 1]);
    }
  } else if (numericDay === 1) {
    if (numericMonth === 0) {
      setDay([numericYear - 1, 11, 31]);
    } else {
      const daysInMonthCount = new Date(numericYear, numericMonth, 0).getDate();
      setDay([numericYear, numericMonth - 1, daysInMonthCount]);
    }
  } else {
    setDay([numericYear, numericMonth, numericDay - 1]);
  }
};

export const moveDateWeek = (side: SIDES, day: DateTuple, setDay: Function) => {
  const [numericYear, numericMonth, numericDay] = day;

  const daysInMonth = new Date(numericYear, numericMonth + 1, 0).getDate();
  if (side === SIDES.RIGHT) {
    if (numericDay + 7 > daysInMonth) {
      const returnedDay = numericDay + 7 - daysInMonth;
      if (numericMonth === 11) {
        setDay([numericYear + 1, 0, returnedDay]);
      } else {
        setDay([numericYear, numericMonth + 1, returnedDay]);
      }
    } else {
      setDay([numericYear, numericMonth, numericDay + 7]);
    }
  } else if (numericDay - 7 < 1) {
    const daysInPreviousMonth = new Date(numericYear, numericMonth, 0).getDate();
    const returnedDay = numericDay - 7 + daysInPreviousMonth;
    if (numericMonth === 0) {
      setDay([numericYear - 1, 11, returnedDay]);
    } else {
      setDay([numericYear, numericMonth - 1, returnedDay]);
    }
  } else {
    setDay([numericYear, numericMonth, numericDay - 7]);
  }
};
