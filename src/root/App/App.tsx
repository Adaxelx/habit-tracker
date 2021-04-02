import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, UserProvider } from 'context';
import { Navigation, Logo } from 'components';
import GlobalStyle from 'styles/GlobalStyle';
import { Router } from '..';

const App = () => (
  <ThemeProvider>
    <UserProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Logo />
        <Navigation />
        <Router />
      </BrowserRouter>
    </UserProvider>
  </ThemeProvider>
);

export default App;
