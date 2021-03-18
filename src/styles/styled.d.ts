// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface CoreTheme {
    colors: {
      common: {
        black: string;
        white: string;
      };
    };
    font;
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
    };
    zIndex: {
      max: number;
      medium: number;
    };
    chooseFS: any;
  }

  export interface DefaultTheme extends CoreTheme {
    colors: {
      body: string;
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
      };
      tile: {
        background: string;
        backgroundActive: string;
      };
      error: string;
      modalBackground: string;
    } & CoreTheme['colors'];
  }
}
