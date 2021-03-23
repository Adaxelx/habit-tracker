import { CoreTheme } from 'styled-components';

interface fontInterface {
  base: string;
  family: string;
  light: number;
  regular: number;
  medium: number;
  bold: number;
  sizes: {
    xs: string;
    s: string;
    sm: string;
    m: string;
    ml: string;
    l: string;
    [key: string]: string;
  };
}

const font: fontInterface = {
  base: '10px',
  family: 'Arial',
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  sizes: {
    xs: '0.75rem',
    s: '1rem',
    sm: '1.25rem',
    m: '1.5rem',
    ml: '2rem',
    l: '3rem',
  },
};

const chooseFS = (fontSize: string) => {
  const { sizes } = font;
  const isValidSize: string | undefined = Object.keys(sizes).find((fs) => fs === fontSize);
  if (isValidSize !== undefined) {
    return sizes[isValidSize];
  }
  return sizes.xs;
};

const core: CoreTheme = {
  colors: {
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
  },
  font,
  margin: {
    xs: '0.5rem',
    s: '0.75rem',
    sm: '1rem',
    m: '1.25rem',
    ml: '1.5rem',
    l: '1.75rem',
  },
  time: {
    short: 100,
    medium: 300,
    long: 500,
  },
  zIndex: {
    max: 3,
    medium: 2,
  },
  chooseFS,
  media: {
    phone: { s: '320px' },
    tablet: { s: '768px', l: '1024px' },
    desktop: { s: '1366px', l: '1920px' },
  },
};

export default core;
