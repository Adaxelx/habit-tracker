import React, { useState } from 'react';
import { useQuery } from 'hooks';
import { Button, Alert } from 'components';
import { useUserContext, useRefreshContext } from 'context';
import { StyledButtonWrapper } from 'views/CalendarPage/CalendarPage.css';
import { CalendarTile, Label } from 'utils';
import { getLabels } from 'views/CalendarPage/CalendarPage.api';
import { CalendarGrid, HabbitForm, LabelForm, LabelList } from '..';

interface GridViewProps {
  days: CalendarTile[];
  actualMonth: number;
  moveDate: Function;
  actualYear: number;
  handleChangeView: Function;
}

const CalendarGridView = ({
  days,
  actualMonth,
  moveDate,
  actualYear,
  handleChangeView,
}: GridViewProps) => {
  const [openHabbitForm, setOpenHabbitForm] = useState(false);
  const [openLabelForm, setOpenLabelForm] = useState(false);
  const [openLabelList, setOpenLabelList] = useState(false);

  const { refLabel } = useRefreshContext();

  const { token } = useUserContext();
  const [labels, loading, error] = useQuery<Label>([token, refLabel], () => getLabels(token));

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
      <Alert loading={loading} error={error} />
    </>
  );
};

export default CalendarGridView;
