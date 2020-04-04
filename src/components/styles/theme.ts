import { DefaultTheme } from 'styled-components';

const colors = {
  bg: '#464a53',
  bgDark: '#3b3e44',
  bgDarker: '#2f3237',
  bgLight: '#525760',
  bsLight: '#44474e',
  bsDark: '#32353a',
  danger: '#f04747',
  primary: '#7289da',
  success: '#43b581',
  text: '#dcddde',
  textMuted: '#72767d',
};

const bs = {
  raised: `4px 4px 8px ${colors.bsDark}, 
           -4px -4px 8px ${colors.bsLight}`,
  inset: `inset 4px 4px 8px ${colors.bsDark}cc, 
          inset -4px -4px 8px ${colors.bsLight}cc`,
};

const gradients = {
  concave: `linear-gradient(145deg, ${colors.bsLight}, ${colors.bsDark})`,
  convex: `linear-gradient(145deg, ${colors.bsDark}, ${colors.bsLight})`,
};

export const theme: DefaultTheme = {
  br: '0.5rem',
  bp: {
    tablet: '580px',
    laptop: '760px',
    desktop: '1100px',
  },
  time: {
    short: '0.1s',
    long: '0.2s',
  },
  bs,
  colors,
  gradients,
};
