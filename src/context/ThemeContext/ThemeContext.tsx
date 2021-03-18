import React, { createContext, useContext } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { defaultTheme } from 'styles/themes';

const ThemeContext = createContext(defaultTheme);

const { Provider } = ThemeContext;

type ThemeProps = {
  children: Object;
};

const ThemeProvider = ({ children }: ThemeProps) => (
  <Provider value={defaultTheme}>
    <SCThemeProvider theme={defaultTheme}>{children}</SCThemeProvider>
  </Provider>
);

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeProvider;
