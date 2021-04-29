import { CoreTheme } from 'styled-components';
import { fontInterface } from 'styles/styled.d';

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
    max: 1000,
    medium: 500,
    low: 100,
  },
  chooseFS,
  sizes: {
    nav: '50px',
    dot: '20px',
  },
  media: {
    phone: { s: '320px' },
    tablet: { s: '768px', l: '1024px' },
    desktop: { s: '1366px', l: '1920px' },
  },
};

export default core;
