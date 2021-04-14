export const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
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
