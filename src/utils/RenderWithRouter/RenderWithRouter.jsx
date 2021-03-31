import React from 'react';
import { ThemeProvider } from 'context';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';

const RenderWithRouter = (
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) => ({
  ...render(
    <ThemeProvider>
      <Router history={history}>{ui}</Router>
    </ThemeProvider>,
  ),
  history,
});

export default RenderWithRouter;
