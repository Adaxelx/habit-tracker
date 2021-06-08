import React, { useLayoutEffect, useRef, useState } from 'react';
import { Label, CalendarTile } from 'utils';
import { useWindowSize } from 'hooks';

import { getDayParsed, weekDaysFull } from 'constants/calendar';
import { StyledWrapper } from './DayCardWrapper.css';
import { DayCard } from '..';

interface DayCardWrapperProps {
  days: CalendarTile[];
  labels: Label[];
  dateClicked: Date;
}

const shouldScroll = (
  days: CalendarTile[],
  wrapper: React.RefObject<HTMLDivElement>,
  width: number,
) => {
  if (days.length > 1) {
    if (wrapper && wrapper.current) {
      if (wrapper.current.scrollWidth > width) {
        const scroll = wrapper.current.scrollWidth / 2 - width / 2;
        wrapper?.current?.scroll(scroll, 0);
      }
    }
  }
};

const DayCardWrapper = ({ days, labels, dateClicked }: DayCardWrapperProps) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const [width] = useWindowSize();
  const [prevDaysLength, setPrevDaysLength] = useState(days.length);

  useLayoutEffect(() => {
    shouldScroll(days, wrapper, width);
  }, [dateClicked, wrapper]);

  useLayoutEffect(() => {
    if (prevDaysLength === 0) {
      shouldScroll(days, wrapper, width);
    }
    setPrevDaysLength(days.length);
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
