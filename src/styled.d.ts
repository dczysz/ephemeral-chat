import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    br: string;
    colors: {
      bg: string;
      bgDark: string;
      bgDarker: string;
      bgLight: string;
      bsDark: string;
      bsLight: string;
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
    bs: {
      raised: string;
      inset: string;
    };
    time: {
      short: string;
      long: string;
    };
    gradients: {
      concave: string;
      convex: string;
    };
  }
}
