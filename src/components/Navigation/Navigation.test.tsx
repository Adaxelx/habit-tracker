import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'context';
import { BrowserRouter } from 'react-router-dom';
import { RenderWithRouter } from 'utils';
import Navigation from './Navigation';

describe('Navigation', () => {
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
});
