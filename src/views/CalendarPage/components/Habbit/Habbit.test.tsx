import React from 'react';
import 'jest-styled-components';
import { TestUtil, HabbitProps, AlertTypes } from 'utils';
import Habbit from './Habbit';
import { AlertContext } from 'context';
import { waitFor } from '@testing-library/dom';

describe('Habbit', () => {
  let util: TestUtil;
  const alertC = { showAlert: jest.fn() };
  let props: HabbitProps;
  let fail: boolean;
  const mockedFetch = (input: string, init: { method: string }) => {
    if (fail) {
      return Promise.resolve({
        status: 500,
        ok: false,
        json: () => Promise.resolve({ message: 'error' }),
      });
    }
    switch (init.method) {
      case 'PATCH':
        return Promise.resolve({
          status: 200,
          ok: true,
          json: () => Promise.resolve({ message: 'Successfully state change.' }),
        });
      case 'DELETE':
        return Promise.resolve({
          status: 204,
          ok: true,
        });
      default:
        return Promise.resolve({});
    }
  };

  beforeAll(() => {
    jest.spyOn(window, 'fetch');
  });

  beforeEach(() => {
    jest.clearAllMocks();
    fail = false;
    props = {
      habbit: {
        _id: '123',
        userId: '123',
        title: 'habbit',
        description: 'desc',
        daysOfWeek: [0, 2, 4, 6],
        dateStart: '2021-06-06',
        dateEnd: '2021-09-07',
        timeStart: '06:06',
        timeEnd: '07:07',
        label: { _id: '123', userId: '123', title: 'label', color: '#676767' },
      },
      labels: [{ _id: '123', userId: '123', title: 'label', color: '#676767' }],
      checked: false,
      day: [2021, 6, 6],
    };
    util = new TestUtil(
      (
        <AlertContext.Provider value={alertC}>
          <Habbit {...props} />
        </AlertContext.Provider>
      ),
    );
    window.fetch.mockImplementation(mockedFetch);
  });

  it('should match snapshot', () => {
    expect(util.render.asFragment()).toMatchSnapshot();
  });

  it('should delete habbit', async () => {
    util.click('delete');

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(alertC.showAlert).toHaveBeenCalledWith(
      'Successfully deleted habbit.',
      AlertTypes.SUCCESS,
    );
  });

  it('should not delete habbit if api fails', async () => {
    fail = true;
    util.click('delete');

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(alertC.showAlert).toHaveBeenCalledWith('error');
  });

  it('should check habbit', async () => {
    util.click('habbit123');

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(alertC.showAlert).toHaveBeenCalledWith('Successful state change.', AlertTypes.SUCCESS);
  });

  it('should not check habbit if api fails', async () => {
    fail = true;
    util.click('habbit123');

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(alertC.showAlert).toHaveBeenCalledWith('error');
  });
});
