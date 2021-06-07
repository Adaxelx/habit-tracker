import React from 'react';
import { ThemeProvider, UserProvider, RefreshProvider, AlertProvider } from 'context';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';

const RenderWithRouter = (
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) => ({
  ...render(
    <ThemeProvider>
      <RefreshProvider>
        <AlertProvider>
          <UserProvider>
            <Router history={history}>{ui}</Router>
          </UserProvider>
        </AlertProvider>
      </RefreshProvider>
    </ThemeProvider>,
  ),
  history,
});

export default RenderWithRouter;
