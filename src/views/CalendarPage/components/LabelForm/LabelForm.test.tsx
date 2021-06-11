import React from 'react';
import 'jest-styled-components';
import { waitFor } from '@testing-library/dom';
import { AlertContext } from 'context';
import { AlertTypes, FormLabel, TestUtil } from 'utils';
import LabelForm from './LabelForm';

jest.mock('react-color', () => ({
  SketchPicker: ({ onChangeComplete, value }) => (
    <input data-testid="color" onChange={onChangeComplete} value={value} />
  ),
}));

describe('LabelForm', () => {
  let util: TestUtil;
  let props: FormLabel;
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
    };
    fail = false;
    jest.clearAllMocks();
    window.fetch.mockImplementation(mockedFetch);
  });

  it('should match snapshot', () => {
    util = new TestUtil(
      (
        <AlertContext.Provider value={alertC}>
          <LabelForm {...props} />
        </AlertContext.Provider>
      ),
    );
    expect(util.render.asFragment()).toMatchSnapshot();
  });

  it('should send label', async () => {
    util = new TestUtil(
      (
        <AlertContext.Provider value={alertC}>
          <LabelForm {...props} />
        </AlertContext.Provider>
      ),
    );

    util.setValue('title', 'title123');
    util.setValue('color', '#ffffff');
    util.click('submit');
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(alertC.showAlert).toHaveBeenCalledWith('Succesfuly added label.', AlertTypes.SUCCESS);
  });

  it('should not send Habit if api fails', async () => {
    fail = true;

    util = new TestUtil(
      (
        <AlertContext.Provider value={alertC}>
          <LabelForm {...props} />
        </AlertContext.Provider>
      ),
    );

    util.setValue('title', 'title123');
    util.setValue('color', '#ffffff');
    util.click('submit');

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(alertC.showAlert).toHaveBeenCalledWith('error');
  });

  it('should send edited Habit', async () => {
    props = {
      ...props,
      label: { _id: '1', userId: '123', color: '#fffffff', title: 'label' },
    };

    util = new TestUtil(
      (
        <AlertContext.Provider value={alertC}>
          <LabelForm {...props} />
        </AlertContext.Provider>
      ),
    );

    util.setValue('title', 'title1234343');
    util.click('submit');

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(alertC.showAlert).toHaveBeenCalledWith('Succesfuly edited label.', AlertTypes.SUCCESS);
  });
});
