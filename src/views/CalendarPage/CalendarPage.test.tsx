import React from 'react';
import 'jest-styled-components';
import { waitFor, act } from '@testing-library/react';
import APIpaths from 'constants/APIpaths';
import { TestUtil, Event, Label } from 'utils';
import CalendarPage from './CalendarPage';

describe('CalendarPage', () => {
  let util: TestUtil;
  let fail: boolean;
  let events: Event[];
  let labels: Label[];

  const mockedFetch = (input: string, init: { method: string }) => {
    if (fail) {
      return Promise.resolve({
        status: 500,
        ok: false,
        json: () => Promise.resolve({ message: 'Something went wrong.' }),
      });
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

    fail = false;
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
    act(() => {
      util = new TestUtil(<CalendarPage />);
    });

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2));
    expect(util.render.asFragment()).toMatchSnapshot();
  });
});
