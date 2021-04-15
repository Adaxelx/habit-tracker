export const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
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

export type Event = {
  _id: string;
  daysOfWeek: number[];
  title: string;
  timeStart?: string;
  timeEnd?: string;
  dateStart: string;
  dateEnd: string;
  label?: string;
  description?: string;
  userId: string;
};

export type Label = {
  _id: string;
  title: string;
  color: string;
};

export const getISODate = (date: Date) => date.toISOString().match(/\d{4}-\d{2}-\d{2}/)![0];
