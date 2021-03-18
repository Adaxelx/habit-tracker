import core from 'styles/themes/core';
import { DefaultTheme } from 'styled-components';

const lightBlue = '#AFE9FF';

const defaultTheme: DefaultTheme = {
  ...core,
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
    error: '#FF9191',
  },
};

export default defaultTheme;
