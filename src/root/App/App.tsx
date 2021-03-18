import React from 'react';
import { ThemeProvider } from 'context';
import { Router } from '..';

const App = () => (
  <ThemeProvider>
    <Router />
  </ThemeProvider>
);

export default App;
