import core from 'styles/themes/core';
import { DefaultTheme } from 'styled-components';

const lightBlue = '#AFE9FF';

const defaultTheme: DefaultTheme = {
  ...core,
  gridTile: {
    size: 50,
  },
  colors: {
    ...core.colors,
    body: '#F3FFF2',
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
    },
    modalBackground: lightBlue,
    error: {
      main: '#FF9191',
      border: '#730000',
      text: '#730000',
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
