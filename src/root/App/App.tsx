import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider, UserProvider, AlertProvider } from 'context';
import { Navigation, Logo, AlertsContainer } from 'components';
import GlobalStyle from 'styles/GlobalStyle';
import { Router } from '..';

const App = () => (
  <ThemeProvider>
    <AlertProvider>
      <UserProvider>
        <GlobalStyle />
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Logo />
          <AlertsContainer />
          <Navigation />
          <Router />
        </HashRouter>
      </UserProvider>
    </AlertProvider>
  </ThemeProvider>
);

export default App;
