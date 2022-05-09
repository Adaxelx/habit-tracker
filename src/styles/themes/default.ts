import core from 'styles/themes/core';
import { DefaultTheme } from 'styled-components';
import { hsl } from 'polished';

const lightBlue = '#AFE9FF';

const defaultTheme: DefaultTheme = {
  ...core,
  gridTile: {
    size: 40,
  },
  newColors: {
    grays: {
      50: hsl(210, 19, 10),
      100: hsl(210, 15, 20),
      200: hsl(210, 15, 25),
      300: hsl(210, 10, 40),
      400: hsl(210, 9, 45),
      500: hsl(210, 8, 50),
      600: hsl(210, 12, 50),
      700: hsl(210, 14, 66),
      800: hsl(210, 20, 77),
      900: hsl(210, 25, 88),
      1000: hsl(210, 25, 96),
    },
  },
  // Old styles to be removed
  colors: {
    ...core.colors,
    body: '#F3FFF2',
    calendar: {
      navigation: '#EDEFFF',
    },
    text: {
      primary: core.colors.common.black,
      secondary: '#808080',
      nav: '#A5A5A5',
    },
    button: {
      background: '#FFC136',
      text: '#fff',
    },
    nav: {
      topLeft: '#B7FF96',
      topRight: '#89FFED',
      bottomLeft: '#FDF194',
      bottomRight: '#FFADFC',
      background: '#A4FF9D',
      button: '#FFED67',
    },
    tile: {
      background: '#FFFCAF',
      backgroundActive: lightBlue,
      border: '#77CBFF',
    },
    modalBackground: lightBlue,
    error: {
      main: '#FF9191',
      border: '#730000',
      text: '#730000',
    },
    success: {
      main: '#d9ffd9',
      border: '#10b9b0',
      text: '#5cb85c',
    },
    loading: {
      main: '#a6fff9',
      border: '#1b968e',
      text: '#1b968e',
    },
    border: '#707070',
  },
};

export default defaultTheme;
