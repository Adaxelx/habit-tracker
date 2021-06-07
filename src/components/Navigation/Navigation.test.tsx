import React from 'react';
import 'jest-styled-components';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { AlertContext, ThemeProvider, UserContext } from 'context';
import { BrowserRouter } from 'react-router-dom';
import { RenderWithRouter } from 'utils';
import Navigation from './Navigation';

describe('Navigation', () => {
  const alertC = { showAlert: jest.fn() };
  const userC = { logout: jest.fn(), token: 'xdd' };
  let fail: boolean;

  const mockedFetch = () => {
    if (fail) {
      return Promise.resolve({
        status: 500,
        ok: false,
        json: () => Promise.resolve({ message: 'error' }),
      });
    }

    return Promise.resolve({
      status: 200,
      ok: true,
      json: () => Promise.resolve({ message: 'Logged out' }),
    });
  };

  beforeAll(() => {
    jest.spyOn(window, 'fetch');
  });

  beforeEach(() => {
    jest.clearAllMocks();
    fail = false;
    window.fetch.mockImplementation(mockedFetch);
  });

  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should open nav and redirect after click', async () => {
    const { container, getByTestId, getByText } = RenderWithRouter(
      <ThemeProvider>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </ThemeProvider>,
    );

    fireEvent.click(getByTestId('navButton'));

    expect(container).toMatchSnapshot();

    expect(window.location.pathname).toBe('/');

    fireEvent.click(getByText('Login'));

    expect(window.location.pathname).toBe('/login');
  });

  it('should logout user', async () => {
    const { getByTestId } = RenderWithRouter(
      <AlertContext.Provider value={alertC}>
        <UserContext.Provider value={userC}>
          <Navigation />
        </UserContext.Provider>
      </AlertContext.Provider>,
    );

    fireEvent.click(getByTestId('navButton'));

    fireEvent.click(getByTestId('logout'));

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(alertC.showAlert).toHaveBeenCalledWith('Successfully logged out', 1);

    expect(userC.logout).toHaveBeenCalled();
  });

  it('should not logout user if api fails', async () => {
    fail = true;
    const { getByTestId } = RenderWithRouter(
      <AlertContext.Provider value={alertC}>
        <UserContext.Provider value={userC}>
          <Navigation />
        </UserContext.Provider>
      </AlertContext.Provider>,
    );

    fireEvent.click(getByTestId('navButton'));

    fireEvent.click(getByTestId('logout'));

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(alertC.showAlert).toHaveBeenCalledWith('error');

    expect(userC.logout).not.toHaveBeenCalled();
  });
});
