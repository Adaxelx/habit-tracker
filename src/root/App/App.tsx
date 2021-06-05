import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, UserProvider, AlertProvider, RefreshProvider } from 'context';
import { Navigation, AlertsContainer, OfflineAlert } from 'components';
import GlobalStyle from 'styles/GlobalStyle';
import { Router } from '..';

const App = () => (
  <ThemeProvider>
    <RefreshProvider>
      <AlertProvider>
        <UserProvider>
          <GlobalStyle />
          <BrowserRouter>
            <OfflineAlert />
            {/* <Logo /> */}
            <AlertsContainer />
            <Navigation />
            <Router />
          </BrowserRouter>
        </UserProvider>
      </AlertProvider>
    </RefreshProvider>
  </ThemeProvider>
);

export default App;
