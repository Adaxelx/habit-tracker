import React from 'react';
import { ThemeProvider } from 'context';
import { Navigation } from 'components';
import { Router } from '..';

const App = () => (
  <ThemeProvider>
    <Navigation />
    <Router />
  </ThemeProvider>
);

export default App;
