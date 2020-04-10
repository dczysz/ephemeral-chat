import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    br: string;
    colors: {
      border: string;
      borderLight: string;
      bg: string;
      bgDark: string;
      bgLight: string;
      bs: string;
      danger: string;
      primary: string;
      success: string;
      text: string;
      textMuted: string;
      textMuteder: string;
    };
    bp: {
      tablet: string;
      laptop: string;
      desktop: string;
    };
    bs: {
      raised: {
        bg: string;
        dark: string;
      };
      inset: {
        bg: string;
        dark: string;
      };
    };
    time: {
      short: string;
      long: string;
    };
  }
}
