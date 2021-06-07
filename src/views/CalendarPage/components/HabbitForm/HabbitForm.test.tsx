import React from 'react';
import 'jest-styled-components';
import { waitFor } from '@testing-library/dom';
import { AlertContext } from 'context';
import { AlertTypes, FormHabbit, TestUtil } from 'utils';
import HabbitForm from './HabbitForm';

describe('HabbitForm', () => {
  let util: TestUtil;
  let props: FormHabbit;
  let fail: boolean;
  const alertC = { showAlert: jest.fn() };

  const mockedFetch = () => {
    if (fail) {
      return Promise.resolve({
        status: 500,
        ok: false,
        json: () => Promise.resolve({ message: 'error' }),
      });
    }

    return Promise.resolve({
      status: 201,
      ok: true,
    });
  };

  beforeAll(() => {
    jest.spyOn(window, 'fetch');
  });

  beforeEach(() => {
    props = {
      handleClose: jest.fn(),
      open: true,
      labels: [{ _id: '1', color: '#ffffff', title: 'label', userId: '123' }],
    };
    fail = false;
    jest.clearAllMocks();
    window.fetch.mockImplementation(mockedFetch);
  });

  it('should match snapshot', () => {
    util = new TestUtil(
      (
        <AlertContext.Provider value={alertC}>
          <HabbitForm {...props} />
        </AlertContext.Provider>
      ),
    );
    expect(util.render.asFragment()).toMatchSnapshot();
  });

  it('should send habbit', async () => {
    util = new TestUtil(
      (
        <AlertContext.Provider value={alertC}>
          <HabbitForm {...props} />
        </AlertContext.Provider>
      ),
    );

    util.setValue('title', 'title123');
    util.setValue('description', 'description');
    util.click('Mon');
    util.click('Mon');
    util.click('Tue');
    util.click('Mon');
    util.setValueByL('Date start', new Date('2021-06-06'));
    util.setValueByL('Date end', new Date('2021-06-16'));
    util.setValue('timeStart', '12:15');
    util.setValue('timeEnd', '15:15');
    util.setValue('label', '1');
    util.click('submit');

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(alertC.showAlert).toHaveBeenCalledWith('Succesfuly added habbit.', AlertTypes.SUCCESS);
  });

  it('should not send habbit if api fails', async () => {
    fail = true;

    util = new TestUtil(
      (
        <AlertContext.Provider value={alertC}>
          <HabbitForm {...props} />
        </AlertContext.Provider>
      ),
    );

    util.setValue('title', 'title123');
    util.setValue('description', 'description');
    util.click('Mon');
    util.setValueByL('Date start', new Date('2021-06-06'));
    util.setValueByL('Date end', new Date('2021-06-16'));
    util.setValue('timeStart', '12:15');
    util.setValue('timeEnd', '15:15');
    util.setValue('label', '1');
    util.click('submit');

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(alertC.showAlert).toHaveBeenCalledWith('error');
  });

  it('should send edited habbit', async () => {
    props = {
      ...props,
      event: {
        _id: '123',
        userId: '1233',
        title: 'title123',
        description: 'description',
        daysOfWeek: [0],
        dateStart: '2021-06-06',
        dateEnd: '2021-06-16',
        timeStart: '12:15',
        timeEnd: '15:15',
        label: { _id: '1', color: '#ffffff', title: 'xd', userId: 'xd' },
      },
    };

    util = new TestUtil(
      (
        <AlertContext.Provider value={alertC}>
          <HabbitForm {...props} />
        </AlertContext.Provider>
      ),
    );

    util.setValue('title', 'title1234343');
    util.click('submit');

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(alertC.showAlert).toHaveBeenCalledWith('Succesfuly edited habbit.', AlertTypes.SUCCESS);
  });
});
