import React from 'react';
import 'jest-styled-components';
import { waitFor } from '@testing-library/react';
import paths from 'constants/paths';
import { TestUtil } from 'utils';
import RegisterPage from './RegisterPage';
import { RegisterFormInputs } from './RegisterPage.api';

const generateLoginData = (repeat = 'password123') => ({
  login: 'login123',
  email: 'email@gmail.com',
  password: 'password123',
  passwordRepeat: repeat,
});

describe('RegisterPage', () => {
  let util: TestUtil;
  let fail: boolean;
  let dummyData: RegisterFormInputs;
  const mockedFetch = (input: string, init: { method: string }) => {
    if (fail) {
      return Promise.resolve({
        status: 500,
        ok: false,
        json: () => Promise.resolve({ message: 'Something went wrong.' }),
      });
    }
    switch (init.method) {
      case 'POST':
        return Promise.resolve({
          status: 200,
          ok: true,
          json: () => Promise.resolve({ token: 'cos' }),
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
    dummyData = generateLoginData();
    window.fetch.mockImplementation(mockedFetch);
    util = new TestUtil(<RegisterPage />);
    fail = false;
  });

  it('should match snapshot', () => {
    expect(util.render.asFragment()).toMatchSnapshot();
  });

  it('should log alert on error', async () => {
    fail = true;
    Object.keys(dummyData).forEach((key) => util.setValue(key, dummyData[key]));
    util.click('submit');
    await waitFor(() => expect(fetch).toHaveBeenCalled());
    expect(util.get('alert').textContent).toBe('Something went wrong.');
  });

  it('should not call fetch if validation fails', async () => {
    util.setValue('login', 'log');
    util.click('submit');
    await waitFor(() => expect(fetch).not.toHaveBeenCalled());
  });

  it('should display alert when passwords are not equal', async () => {
    dummyData = generateLoginData('badrepeat123');
    Object.keys(dummyData).forEach((key) => util.setValue(key, dummyData[key]));
    util.click('submit');
    await waitFor(() => util.get('alert'));
    expect(util.get('alert').textContent).toBe('Passwords must be equal.');
  });

  it('should send login data', async () => {
    Object.keys(dummyData).forEach((key) => util.setValue(key, dummyData[key]));
    util.click('submit');
    await waitFor(() => expect(fetch).toHaveBeenCalled());
    await waitFor(() => expect(util.render.history.location.pathname).toEqual(paths.CALENDAR));
  });
});
