// import original module declarations
import 'styled-components';

interface MediaType {
  s: string;
  l: string;
}

interface AlertType {
  main: string;
  border: string;
  text: string;
}

export interface fontInterface {
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

// and extend them!
declare module 'styled-components' {
  export interface CoreTheme {
    colors: {
      common: {
        black: string;
        white: string;
      };
    };
    font: fontInterface;
    margin: {
      xs: string;
      s: string;
      sm: string;
      m: string;
      ml: string;
      l: string;
      [key: string]: string;
    };
    time: {
      short: number;
      medium: number;
      long: number;
    };
    zIndex: {
      max: number;
      medium: number;
      low: number;
    };
    chooseFS: any;
    media: {
      phone: { s: string; sm: string };
      tablet: MediaType;
      desktop: MediaType;
    };
    sizes: {
      nav: string;
      dot: string;
    };
  }

  export interface DefaultTheme extends CoreTheme {
    gridTile: { size: number };
    colors: {
      body: string;
      calendar: { navigation: string };
      text: {
        primary: string;
        secondary: string;
        nav: string;
      };
      button: {
        background: string;
        text: string;
      };
      nav: {
        topLeft: string;
        topRight: string;
        bottomLeft: string;
        bottomRight: string;
        background: string;
        button: string;
        [key: string]: string;
      };
      tile: {
        background: string;
        backgroundActive: string;
        border: string;
      };
      error: AlertType;
      success: AlertType;
      loading: AlertType;
      modalBackground: string;
      border: string;
    } & CoreTheme['colors'];
  }
}
