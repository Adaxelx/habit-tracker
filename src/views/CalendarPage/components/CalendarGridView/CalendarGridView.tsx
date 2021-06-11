import React, { useState } from 'react';
import { Button } from 'components';
import { StyledButtonWrapper } from 'views/CalendarPage/CalendarPage.css';
import { GridViewProps } from 'utils';
import { CalendarGrid, HabitForm, LabelForm, LabelList } from '..';

const CalendarGridView = ({
  days,
  actualMonth,
  moveDate,
  actualYear,
  handleChangeView,
  labels,
}: GridViewProps) => {
  const [openHabitForm, setOpenHabitForm] = useState(false);
  const [openLabelForm, setOpenLabelForm] = useState(false);
  const [openLabelList, setOpenLabelList] = useState(false);

  return (
    <>
      <CalendarGrid
        days={days}
        month={actualMonth}
        moveDate={moveDate}
        year={actualYear}
        handleDayChange={handleChangeView}
      />
      <StyledButtonWrapper>
        <Button
          size="s"
          noMaxWidth
          mt="16px"
          data-testid="addh"
          disabled={!navigator.onLine}
          onClick={() => setOpenHabitForm(true)}
        >
          Add Habit
        </Button>
        <Button
          size="s"
          noMaxWidth
          mt="16px"
          disabled={!navigator.onLine}
          mx="16px"
          data-testid="addl"
          onClick={() => setOpenLabelForm(true)}
        >
          Add label
        </Button>
        <Button
          size="s"
          noMaxWidth
          mt="16px"
          data-testid="labell"
          onClick={() => setOpenLabelList(true)}
        >
          Label list
        </Button>
      </StyledButtonWrapper>
      <HabitForm open={openHabitForm} handleClose={() => setOpenHabitForm(false)} labels={labels} />
      <LabelForm open={openLabelForm} handleClose={() => setOpenLabelForm(false)} />
      <LabelList open={openLabelList} handleClose={() => setOpenLabelList(false)} labels={labels} />
    </>
  );
};

export default CalendarGridView;
