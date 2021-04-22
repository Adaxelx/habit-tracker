/* eslint-disable no-loop-func */
import { useEffect, useState } from 'react';
import { Event, EventLoop, CalendarTile } from 'utils';
import { calculateDayInYear } from 'constants/calendar';

const useCalendar = (events: Event[], month: number, year: number) => {
  const [days, setDays] = useState<CalendarTile[]>([]);

  useEffect(() => {
    let firstDay = new Date(year, month).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();
    if (firstDay === 0) {
      firstDay = 7;
    }
    firstDay -= 1;
    let eventsCopy: EventLoop[] = [];
    eventsCopy = events.map((event) => ({
      ...event,
      numericStart: calculateDayInYear(event.dateStart),
      numericEnd: calculateDayInYear(event.dateEnd),
    }));

    let eventsArray: EventLoop[] = [];
    const daysArray: CalendarTile[] = [];
    let dayInYear = calculateDayInYear(`${year}-${month + 1}-1`);

    for (let i = 0; i < 6; i += 1) {
      for (let j = 0; j < 7; j += 1) {
        if (i === 0 && j < firstDay) {
          daysArray.push({ day: -1, events: [] });
        } else {
          eventsArray = eventsArray.filter(
            (event) => event.numericEnd > dayInYear && event.daysOfWeek.includes(j),
          );
          const day = i * 7 + j - firstDay + 1;

          if (day > daysInMonth) {
            break;
          }

          eventsCopy = eventsCopy.filter((event) => {
            if (
              event.numericStart <= dayInYear &&
              dayInYear <= event.numericEnd &&
              !eventsArray.includes(event) &&
              event.daysOfWeek.includes(j)
            ) {
              eventsArray.push(event);
            }
            return dayInYear <= event.numericEnd;
          });

          daysArray.push({ day, events: eventsArray });

          dayInYear += 1;
        }
      }
    }
    setDays(daysArray);
  }, [month, year, events]);

  return [days];
};

export default useCalendar;
