import React from 'react';
import 'jest-styled-components';
import { waitFor } from '@testing-library/dom';
import { AlertContext } from 'context';
import { AlertTypes, FormHabit, TestUtil } from 'utils';
import HabitForm from './HabitForm';

describe('HabitForm', () => {
  let util: TestUtil;
  let props: FormHabit;
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
          <HabitForm {...props} />
        </AlertContext.Provider>
      ),
    );
    expect(util.render.asFragment()).toMatchSnapshot();
  });

  it('should send Habit', async () => {
    util = new TestUtil(
      (
        <AlertContext.Provider value={alertC}>
          <HabitForm {...props} />
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

    expect(alertC.showAlert).toHaveBeenCalledWith('Succesfuly added Habit.', AlertTypes.SUCCESS);
  });

  it('should not send Habit if api fails', async () => {
    fail = true;

    util = new TestUtil(
      (
        <AlertContext.Provider value={alertC}>
          <HabitForm {...props} />
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

  it('should send edited Habit', async () => {
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
          <HabitForm {...props} />
        </AlertContext.Provider>
      ),
    );

    util.setValue('title', 'title1234343');
    util.click('submit');

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(alertC.showAlert).toHaveBeenCalledWith('Succesfuly edited Habit.', AlertTypes.SUCCESS);
  });
});
