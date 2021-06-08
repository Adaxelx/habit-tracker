import React from 'react';
import 'jest-styled-components';
import { TestUtil, GridViewProps } from 'utils';
import { act } from 'react-dom/test-utils';
import CalendarGridView from './CalendarGridView';

jest.mock('react-color', () => ({
  SketchPicker: ({ onChangeComplete, value }) => (
    <input data-testid="color" onChange={onChangeComplete} value={value} />
  ),
}));

describe('CalendarGridView', () => {
  let util: TestUtil;

  let props: GridViewProps;

  beforeEach(() => {
    jest.clearAllMocks();

    props = {
      days: [{ day: 1, events: [], id: 1, active: true, date: new Date('2021-06-06') }],
      actualMonth: 1,
      moveDate: jest.fn(),
      actualYear: 1,
      handleChangeView: jest.fn(),
      labels: [{ _id: '123', userId: '123', title: 'label', color: '#676767' }],
    };
    util = new TestUtil(<CalendarGridView {...props} />);
  });

  it('should match snapshot', () => {
    expect(util.render.asFragment()).toMatchSnapshot();
  });

  it('should close and open event form', async () => {
    const header = 'Add habbit';
    await act(async () => {
      await util.click('addh');
    });
    util.get(`${header}-header`);
    await act(async () => {
      await util.click(`${header}-close`);
    });
  });

  it('should close and open label form', async () => {
    const header = 'Add label';
    await act(async () => {
      await util.click('addl');
    });
    util.get(`${header}-header`);
    await act(async () => {
      await util.click(`${header}-close`);
    });
  });

  it('should close and open label list', async () => {
    const header = 'Label list';
    await act(async () => {
      await util.click('labell');
    });
    util.get(`${header}-header`);
    util.click(`${header}-close`);
  });
});
