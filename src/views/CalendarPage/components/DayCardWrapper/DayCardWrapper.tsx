import React, { useLayoutEffect, useRef } from 'react';
import { DateTuple, Event, TokenType } from 'utils';
import { useCalendar, useQuery, useWindowSize } from 'hooks';
import { getEvents } from 'views/CalendarPage/CalendarPage.api';
import { weekDaysFull, getDayParsed, generateParsedDate } from 'constants/calendar';
import { StyledWrapper } from './DayCardWrapper.css';
import { DayCard } from '..';

interface DayCardWrapperProps {
  from: DateTuple;
  to: DateTuple;
  token: TokenType;
}

const DayCardWrapper = ({ from, to, token }: DayCardWrapperProps) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const [width] = useWindowSize();

  const fromParsed = generateParsedDate(from);
  const toParsed = generateParsedDate(to);

  const [events] = useQuery<Event>([from, to, token], () => getEvents(token, fromParsed, toParsed));

  const [days] = useCalendar(events, from, to);

  useLayoutEffect(() => {
    if (days.length > 1) {
      if (wrapper && wrapper.current) {
        if (wrapper.current.scrollWidth > width) {
          const scroll = wrapper.current.scrollWidth / 2 - width / 2;
          wrapper?.current?.scroll(scroll, 0);
        }
      }
    }
  }, [days, wrapper]);

  const firstDayOfWeek = getDayParsed(new Date(fromParsed));
  let startDate = new Date(fromParsed).getTime();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayTime = today.getTime();

  return (
    <StyledWrapper ref={wrapper}>
      {days.map(({ events: eventsArr, id }, i) => {
        const index = firstDayOfWeek + i > 6 ? (firstDayOfWeek + i) % 7 : firstDayOfWeek + i;
        const cardDate = new Date(startDate);
        cardDate.setHours(0, 0, 0, 0);
        const cardTime = cardDate.getTime();
        startDate += 24 * 60 * 60 * 1000;
        return (
          <DayCard
            active={todayTime === cardTime}
            key={id}
            header={weekDaysFull[index]}
            events={eventsArr}
          />
        );
      })}
    </StyledWrapper>
  );
};

export default DayCardWrapper;
