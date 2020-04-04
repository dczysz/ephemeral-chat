import { DefaultTheme } from 'styled-components';

const colors = {
  bg: '#36393f',
  bgDark: '#2f3136',
  bgDarker: '#292b2f',
  bgLight: '#40444b',
  bsLight: '#282a2e',
  bsDark: '#36383e',
  danger: '#f04747',
  primary: '#7289da',
  success: '#43b581',
  text: '#dcddde',
  textMuted: '#72767d',
};

const bs = {
  raised: `4px 4px 8px ${colors.bsLight}, 
           -4px -4px 8px ${colors.bsDark}`,
  inset: `inset 4px 4px 8px ${colors.bsLight}cc, 
          inset -4px -4px 8px ${colors.bsDark}cc`,
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
    desktop: '1000px',
  },
  time: {
    short: '0.1s',
    long: '0.2s',
  },
  bs,
  colors,
  gradients,
};
