import React, { useState } from 'react';
import { useQuery } from 'hooks';
import { Button, Alert } from 'components';
import { useUserContext, useRefreshContext } from 'context';
import { StyledButtonWrapper } from 'views/CalendarPage/CalendarPage.css';
import { Event, Label } from 'utils';
import { getLabels } from 'views/CalendarPage/CalendarPage.api';
import { CalendarGrid, HabbitForm, LabelForm, LabelList } from '..';

interface GridViewProps {
  events: Event[];
  actualMonth: number;
  moveDate: Function;
  actualYear: number;
  handleChangeView: Function;
  refresh: boolean;
  handleRefresh: Function;
}

const CalendarGridView = ({
  events,
  actualMonth,
  moveDate,
  actualYear,
  handleChangeView,
  refresh,
  handleRefresh,
}: GridViewProps) => {
  const [openHabbitForm, setOpenHabbitForm] = useState(false);
  const [openLabelForm, setOpenLabelForm] = useState(false);
  const [openLabelList, setOpenLabelList] = useState(false);

  const { refLabel } = useRefreshContext();

  const { token } = useUserContext();
  const [labels, loading, error] = useQuery<Label>([token, refresh, refLabel], () =>
    getLabels(token),
  );

  return (
    <>
      <CalendarGrid
        events={events}
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
        handleRefresh={handleRefresh}
        refresh={refresh}
        labels={labels}
      />
      <LabelForm
        open={openLabelForm}
        handleClose={() => setOpenLabelForm(false)}
        handleRefresh={handleRefresh}
      />
      <LabelList
        open={openLabelList}
        handleClose={() => setOpenLabelList(false)}
        handleRefresh={handleRefresh}
        labels={labels}
      />
      <Alert loading={loading} error={error} />
    </>
  );
};

export default CalendarGridView;
