import React from 'react';
import 'jest-styled-components';
import { waitFor } from '@testing-library/react';
import { AlertTypes, FormWithLabels, TestUtil } from 'utils';
import { AlertContext } from 'context';
import LabelList from './LabelList';

describe('LabelList', () => {
  let util: TestUtil;
  let props: FormWithLabels;
  let fail: boolean;
  let alertC = { showAlert: jest.fn() };

  const mockedFetch = () => {
    if (fail) {
      return Promise.resolve({
        status: 500,
        ok: false,
        json: () => Promise.resolve({ message: 'error' }),
      });
    }

    return Promise.resolve({
      status: 204,
      ok: true,
    });
  };

  beforeAll(() => {
    jest.spyOn(window, 'fetch');
  });

  beforeEach(() => {
    props = {
      labels: [{ _id: '1', title: 'title', color: '#333333', userId: '123' }],
      open: true,
      handleClose: jest.fn(),
    };
    jest.clearAllMocks();
    fail = false;
    util = new TestUtil(
      (
        <AlertContext.Provider value={alertC}>
          <LabelList {...props} />
        </AlertContext.Provider>
      ),
    );
    window.fetch.mockImplementation(mockedFetch);
  });

  it('should match snapshot', () => {
    expect(util.render.asFragment()).toMatchSnapshot();
  });

  it('should delete label', async () => {
    util.click('delete1');

    await waitFor(() => expect(util.get('deleteModal-close')).toBeInTheDocument());
    util.click('delete-keep');
    util.click('delete1');
    await waitFor(() => expect(util.get('deleteModal-close')).toBeInTheDocument());
    util.click('deleteItem');
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(alertC.showAlert).toHaveBeenCalledWith('Succesfuly deleted label.', AlertTypes.SUCCESS);
  });

  it('should not delete label if api fails', async () => {
    fail = true;
    util.click('delete1');

    await waitFor(() => expect(util.get('deleteModal-close')).toBeInTheDocument());
    util.get('deleteModal-close');
    util.click('delete1');
    await waitFor(() => expect(util.get('deleteModal-close')).toBeInTheDocument());
    util.click('deleteItem');
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(alertC.showAlert).toHaveBeenCalledWith('error');
  });
});
