import React from 'react';
import { ThemeProvider, UserProvider } from 'context';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';

const RenderWithRouter = (
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) => ({
  ...render(
    <ThemeProvider>
      <UserProvider>
        <Router history={history}>{ui}</Router>
      </UserProvider>
    </ThemeProvider>,
  ),
  history,
});

export default RenderWithRouter;
