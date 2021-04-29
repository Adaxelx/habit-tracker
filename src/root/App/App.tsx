import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider, UserProvider } from 'context';
import { Navigation, Logo } from 'components';
import GlobalStyle from 'styles/GlobalStyle';
import { Router } from '..';

const App = () => (
  <ThemeProvider>
    <UserProvider>
      <GlobalStyle />
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Logo />
        <Navigation />
        <Router />
      </HashRouter>
    </UserProvider>
  </ThemeProvider>
);

export default App;
