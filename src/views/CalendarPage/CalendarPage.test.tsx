import React from 'react';
import 'jest-styled-components';
import { waitFor, act } from '@testing-library/react';
import APIpaths from 'constants/APIpaths';
import { TestUtil, Event, Label } from 'utils';
import { months } from 'constants/calendar';
import CalendarPage from './CalendarPage';

const failMessage = (message: string) =>
  Promise.resolve({
    status: 500,
    ok: false,
    json: () => Promise.resolve({ message }),
  });

describe('CalendarPage', () => {
  let util: TestUtil;
  let failE: boolean;
  let failL: boolean;
  let events: Event[];
  let labels: Label[];

  const mockedFetch = (input: string, init: { method: string }) => {
    if (failE && input.includes(APIpaths.EVENTS)) {
      return failMessage('failEvent');
    }
    if (failL && input.includes(APIpaths.LABELS)) {
      return failMessage('failLabel');
    }
    switch (init.method) {
      case 'GET':
        if (input.includes(APIpaths.EVENTS)) {
          return Promise.resolve({
            status: 200,
            ok: true,
            json: () => Promise.resolve(events),
          });
        }
        return Promise.resolve({
          status: 200,
          ok: true,
          json: () => Promise.resolve(labels),
        });

      default:
        return null;
    }
  };

  beforeAll(() => {
    jest.spyOn(window, 'fetch');
  });
  beforeEach(() => {
    jest.clearAllMocks();
    window.fetch.mockImplementation(mockedFetch);

    failE = false;
    failL = false;
    events = [
      {
        checked: [{ day: 3, month: 3, year: 2021, _id: 'xdd' }],
        dateEnd: '2021-04-30',
        dateStart: '2021-04-03',
        daysOfWeek: [0, 1, 3],
        description: 'opis',
        label: '607027b44d8d2d0b7dfb3d71',
        _id: '123',
        title: 'xdd',
        userId: '123',
      },
    ];
    labels = [{ color: '#ffffff', title: 'Label', userId: '123', _id: '607027b44d8d2d0b7dfb3d71' }];
  });

  it('should match snapshot', async () => {
    const mockDate = new Date('2022-01-01');
    const spy = jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
    act(() => {
      util = new TestUtil(<CalendarPage />);
    });

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2));
    expect(util.render.asFragment()).toMatchSnapshot();
    spy.mockRestore();
  });

  it('should show error message event', async () => {
    failE = true;
    act(() => {
      util = new TestUtil(<CalendarPage />);
    });

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2));
    expect(util.get('alert').textContent).toBe('failEvent');
  });

  it('should show error message label', async () => {
    failL = true;
    act(() => {
      util = new TestUtil(<CalendarPage />);
    });

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2));
    expect(util.get('alert').textContent).toBe('failLabel');
  });

  it('should move dates', async () => {
    act(() => {
      util = new TestUtil(<CalendarPage />);
    });

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2));
    const [month, year] = util.get('dateCalendar')?.textContent?.split(' ') as [string, string];
    const index = months.findIndex((monthArr) => monthArr === month);
    const prevIndex = index - 1 < 0 ? 11 : index - 1;
    const prevYear = index - 1 < 0 ? year - 1 : year;

    util.click('moveLeft');
    expect(util.get('dateCalendar').textContent).toBe(`${months[prevIndex]} ${prevYear}`);

    util.click('moveRight');
    expect(util.get('dateCalendar').textContent).toBe(`${month} ${year}`);
  });

  it('should move dates on border', async () => {
    const mockDate = new Date('2022-01-01');
    const spy = jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
    act(() => {
      util = new TestUtil(<CalendarPage />);
    });

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2));
    const [month, year] = util.get('dateCalendar')?.textContent?.split(' ') as [string, string];
    const index = months.findIndex((monthArr) => monthArr === month);
    const prevIndex = index - 1 < 0 ? 11 : index - 1;
    const prevYear = index - 1 < 0 ? year - 1 : year;

    util.click('moveLeft');
    expect(util.get('dateCalendar').textContent).toBe(`${months[prevIndex]} ${prevYear}`);

    util.click('moveRight');
    expect(util.get('dateCalendar').textContent).toBe(`${month} ${year}`);

    spy.mockRestore();
  });
});
