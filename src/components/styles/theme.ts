import { DefaultTheme } from 'styled-components';

const bsColors = {
  dark: {
    dark: '#2a2d31',
    light: '#4c4f57',
  },
  darker: {
    dark: '#222428',
    light: '#3c4046',
  },
};

const colors = {
  bg: '#464a53',
  bgDark: '#3b3e44',
  bgDarker: '#2f3237',
  bgLight: '#525760',
  danger: '#f04747',
  primary: '#7289da',
  success: '#43b581',
  text: '#dcddde',
  textMuted: '#878b92',
};

const bs = {
  raised: {
    dark: `4px 4px 8px ${bsColors.dark.dark}, 
          -4px -4px 8px ${bsColors.dark.light}`,
    darker: `4px 4px 8px ${bsColors.darker.dark}, 
            -4px -4px 8px ${bsColors.darker.light}`,
  },
  inset: {
    dark: `inset 4px 4px 8px ${bsColors.dark.dark}cc, 
           inset -4px -4px 8px ${bsColors.dark.light}cc`,
    darker: `inset 4px 4px 8px ${bsColors.darker.dark}cc, 
             inset -4px -4px 8px ${bsColors.darker.light}cc`,
  },
  grooved: {
    light: `inset 0 0 0 1px ${colors.bgLight},
            inset 0 0 0 2px ${colors.bgDark}66`,
    primary: `inset 0 0 0 1px ${colors.primary},
              inset 0 0 0 2px ${colors.bg}66`,
  },
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
};
