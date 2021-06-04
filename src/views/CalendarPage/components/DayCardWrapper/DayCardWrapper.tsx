import React, { useLayoutEffect, useRef } from 'react';
import { DateTuple, TokenType, Label, CalendarTile } from 'utils';
import { useQuery, useWindowSize } from 'hooks';
import { getLabels } from 'views/CalendarPage/CalendarPage.api';
import { useRefreshContext } from 'context';
import { weekDaysFull, getDayParsed, generateParsedDate } from 'constants/calendar';
import { StyledWrapper } from './DayCardWrapper.css';
import { DayCard } from '..';

interface DayCardWrapperProps {
  from: DateTuple;
  to: DateTuple;
  token: TokenType;
  days: CalendarTile[];
}

const DayCardWrapper = ({ from, to, days, token }: DayCardWrapperProps) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const [width] = useWindowSize();

  const fromParsed = generateParsedDate(from);

  console.log(to);

  const { refLabel } = useRefreshContext();

  const [labels] = useQuery<Label>([token, refLabel], () => getLabels(token));

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

  const [year, month] = from;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return (
    <>
      <StyledWrapper ref={wrapper}>
        {days.map(({ events: eventsArr, id, day }, i) => {
          const index = firstDayOfWeek + i > 6 ? (firstDayOfWeek + i) % 7 : firstDayOfWeek + i;
          const cardDate = new Date(startDate);
          cardDate.setHours(0, 0, 0, 0);
          const cardTime = cardDate.getTime();
          startDate += 24 * 60 * 60 * 1000;
          let dayReturned = day;
          if (day > daysInMonth) {
            dayReturned = day - daysInMonth;
          }

          return (
            <DayCard
              active={todayTime === cardTime}
              key={id}
              header={weekDaysFull[index]}
              events={eventsArr}
              labels={labels}
              date={[year, month, dayReturned]}
            />
          );
        })}
      </StyledWrapper>
    </>
  );
};

export default DayCardWrapper;
