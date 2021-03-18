import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'context';
import { Navigation } from 'components';
import { Router } from '..';

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
