import React, { useState } from 'react';
import { Button } from 'components';
import { StyledButtonWrapper } from 'views/CalendarPage/CalendarPage.css';
import { CalendarTile, Label } from 'utils';
import { CalendarGrid, HabbitForm, LabelForm, LabelList } from '..';

interface GridViewProps {
  days: CalendarTile[];
  actualMonth: number;
  moveDate: Function;
  actualYear: number;
  handleChangeView: Function;
  labels: Label[];
}

const CalendarGridView = ({
  days,
  actualMonth,
  moveDate,
  actualYear,
  handleChangeView,
  labels,
}: GridViewProps) => {
  const [openHabbitForm, setOpenHabbitForm] = useState(false);
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
          onClick={() => setOpenHabbitForm(true)}
        >
          Add habbit
        </Button>
        <Button
          size="s"
          noMaxWidth
          mt="16px"
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
      <HabbitForm
        open={openHabbitForm}
        handleClose={() => setOpenHabbitForm(false)}
        labels={labels}
      />
      <LabelForm open={openLabelForm} handleClose={() => setOpenLabelForm(false)} />
      <LabelList open={openLabelList} handleClose={() => setOpenLabelList(false)} labels={labels} />
    </>
  );
};

export default CalendarGridView;
