import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, UserProvider, AlertProvider, RefreshProvider } from 'context';
import { Navigation, AlertsContainer } from 'components';
import GlobalStyle from 'styles/GlobalStyle';
import { Router } from '..';

const App = () => (
  <ThemeProvider>
    <RefreshProvider>
      {console.log(!navigator.onLine && 'Offline jestem byczku')}
      <AlertProvider>
        <UserProvider>
          <GlobalStyle />
          <BrowserRouter>
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
