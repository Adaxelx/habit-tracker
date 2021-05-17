/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
import { useEffect, useState } from 'react';
import { Event, EventLoop, CalendarTile, DateTuple } from 'utils';
import { calculateDayInYear, getDayParsed } from 'constants/calendar';

const useCalendar = (events: Event[], from: DateTuple, to: DateTuple, shift?: boolean) => {
  const [days, setDays] = useState<CalendarTile[]>([]);

  const [yearFrom, monthFrom, dayFrom] = from;
  const [, , dayTo] = to;

  useEffect(() => {
    let firstDay = getDayParsed(new Date(yearFrom, monthFrom, dayFrom));
    const daysInMonth = dayTo;
    if (firstDay === 0) {
      firstDay = 7;
    }

    let dayOfWeek = firstDay;
    let eventsCopy: EventLoop[] = [];
    eventsCopy = events.map((event) => ({
      ...event,
      numericStart: calculateDayInYear(event.dateStart),
      numericEnd: calculateDayInYear(event.dateEnd),
    }));

    let eventsArray: EventLoop[] = [];
    const daysArray: CalendarTile[] = [];
    let dayInYear = calculateDayInYear(`${yearFrom}-${monthFrom + 1}-${dayFrom}`);

    const difference = dayTo + 1 - dayFrom;

    for (let i = 0; i < Math.ceil(difference / 7); i++) {
      for (let j = 0; j < 7; j++) {
        eventsArray = eventsArray.filter(
          (event) => event.numericEnd > dayInYear && event.daysOfWeek.includes(dayOfWeek),
        );

        const day = dayFrom + i * 7 + j;

        if (day > daysInMonth) {
          break;
        }

        eventsCopy = eventsCopy.filter((event) => {
          if (
            event.numericStart <= dayInYear &&
            dayInYear <= event.numericEnd &&
            !eventsArray.includes(event) &&
            event.daysOfWeek.includes(dayOfWeek)
          ) {
            eventsArray.push(event);
          }
          return dayInYear <= event.numericEnd;
        });

        daysArray.push({ id: i * 13 + j * 17, day, events: eventsArray });

        dayInYear += 1;
        dayOfWeek++;
        if (dayOfWeek === 7) {
          dayOfWeek = 0;
        }
      }
    }

    if (shift) {
      for (let i = 0; i < 6; i++) {
        if (i < firstDay) {
          daysArray.unshift({ id: i * 167 + 1, day: -1, events: [] });
        }
      }
    }
    setDays(daysArray);
  }, [events]);

  return [days];
};

export default useCalendar;
