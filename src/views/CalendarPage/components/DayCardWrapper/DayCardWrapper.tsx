import React, { useLayoutEffect, useRef } from 'react';
import { TokenType, Label, CalendarTile } from 'utils';
import { useQuery, useWindowSize } from 'hooks';
import { getLabels } from 'views/CalendarPage/CalendarPage.api';
import { useRefreshContext } from 'context';
import { getDayParsed, weekDaysFull } from 'constants/calendar';
import { StyledWrapper } from './DayCardWrapper.css';
import { DayCard } from '..';

interface DayCardWrapperProps {
  token: TokenType;
  days: CalendarTile[];
}

const DayCardWrapper = ({ days, token }: DayCardWrapperProps) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const [width] = useWindowSize();

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

  return (
    <>
      <StyledWrapper ref={wrapper}>
        {days.map(({ events: eventsArr, id, date }) => {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          if (date) {
            return (
              <DayCard
                active={today.getTime() === date?.getTime()}
                key={id}
                header={weekDaysFull[getDayParsed(date)]}
                events={eventsArr}
                labels={labels}
                date={[date.getFullYear(), date.getMonth(), date.getDate()]}
              />
            );
          }
          return null;
        })}
      </StyledWrapper>
    </>
  );
};

export default DayCardWrapper;
