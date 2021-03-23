import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'context';
import { Navigation, Logo } from 'components';
import GlobalStyle from 'styles/GlobalStyle';
import { Router } from '..';

const App = () => (
  <ThemeProvider>
    <GlobalStyle />
    <BrowserRouter>
      <Logo />
      <Navigation />
      <Router />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
