/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
import { getDayParsed } from 'constants/calendar';
import { useEffect, useState } from 'react';

import { CalendarTile, Event } from 'utils';

const useCalendar2 = (
  events: Event[],
  from: Date,
  to: Date,
  activeFrom: Date,
  activeTo: Date,
): [CalendarTile[]] => {
  const [days, setDays] = useState<CalendarTile[]>([]);

  useEffect(() => {
    const startDate = new Date(from.getTime());
    let day = 0;
    const daysArray = [];
    let flag = false;
    let firstDay = -1;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        const filtered = events.filter(
          (event) =>
            new Date(event.dateStart) <= startDate &&
            new Date(event.dateEnd) >= startDate &&
            event.daysOfWeek.includes(getDayParsed(startDate)),
        );
        flag = false;
        if (activeFrom <= startDate && startDate < activeTo) {
          if (activeFrom.getTime() === startDate.getTime()) {
            firstDay = getDayParsed(startDate);
          }

          flag = true;
          day++;
        }

        daysArray.push({
          id: i * 13 + j * 17,
          day,
          date: new Date(startDate.getTime()),
          events: filtered,
          active: flag,
        });
        startDate.setDate(startDate.getDate() + 1);
      }
    }
    for (let i = 0; i < 6; i++) {
      if (i < firstDay) {
        daysArray.unshift({ id: i * 167 + 1, day: -1, events: [], active: true });
      }
    }

    setDays(daysArray);
  }, [events, from, to]);

  return [days];
};

export default useCalendar2;
