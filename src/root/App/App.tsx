import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider, UserProvider, AlertProvider, RefreshProvider } from 'context';
import { Navigation, Logo, AlertsContainer } from 'components';
import GlobalStyle from 'styles/GlobalStyle';
import { Router } from '..';

const App = () => (
  <ThemeProvider>
    <RefreshProvider>
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
    </RefreshProvider>
  </ThemeProvider>
);

export default App;
