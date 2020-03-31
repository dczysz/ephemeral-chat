import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    br: string;
    colors: {
      bg: string;
      bgDark: string;
      bgDarker: string;
      bgLight: string;
      danger: string;
      primary: string;
      success: string;
      text: string;
      textMuted: string;
    };
    bp: {
      tablet: string;
      laptop: string;
      desktop: string;
    };
  }
}
