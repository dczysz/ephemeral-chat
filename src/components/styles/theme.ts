import { DefaultTheme } from 'styled-components';

const bsColors = {
  lightTheme: {
    bg: {
      dark: '#c1c2c4',
      light: '#ffffff',
    },
    dark: {
      dark: '#2a2d31',
      light: '#4c4f57',
    },
  },
  darkTheme: {
    bg: {
      dark: '#222428',
      light: '#3c4046',
    },
    dark: {
      dark: '#2a2d31',
      light: '#4c4f57',
    },
  },
};

const colors = {
  lightTheme: {
    border: '#d6d8db',
    borderLight: '#dadcdf',
    bg: '#e3e4e6',
    bgDark: '#cfcfcf',
    bgLight: '#fbfdff',
    bs: '#2f323766',
    danger: '#f04747',
    primary: '#5e77d4',
    success: '#52a088',
    text: '#303236',
    textMuted: '#60646c',
    textMuteder: '#93979f',
  },
  darkTheme: {
    border: '#464a53',
    borderLight: '#3b3e45',
    bg: '#2f3237',
    bgDark: '#17191c',
    bgLight: '#464a53',
    bs: '#17191c88',
    danger: '#f04747',
    primary: '#7289da',
    success: '#43b581',
    text: '#dcddde',
    textMuted: '#afb1b6',
    textMuteder: '#878b92',
  },
};

// Remove dark? not in use currently
const bs = {
  lightTheme: {
    raised: {
      bg: `4px 4px 8px ${bsColors.lightTheme.bg.dark},
          -4px -4px 8px ${bsColors.lightTheme.bg.light}`,
      dark: `4px 4px 8px ${bsColors.lightTheme.dark.dark},
            -4px -4px 8px ${bsColors.lightTheme.dark.light}`,
    },
    inset: {
      bg: `inset 4px 4px 8px ${bsColors.lightTheme.bg.dark}cc,
           inset -4px -4px 8px ${bsColors.lightTheme.bg.light}cc`,
      dark: `inset 4px 4px 8px ${bsColors.lightTheme.dark.dark}cc, 
             inset -4px -4px 8px ${bsColors.lightTheme.dark.light}cc`,
    },
  },
  darkTheme: {
    raised: {
      bg: `4px 4px 8px ${bsColors.darkTheme.bg.dark}, 
          -4px -4px 8px ${bsColors.darkTheme.bg.light}`,
      dark: `4px 4px 8px ${bsColors.darkTheme.dark.dark}, 
            -4px -4px 8px ${bsColors.darkTheme.dark.light}`,
    },
    inset: {
      bg: `inset 4px 4px 8px ${bsColors.darkTheme.bg.dark}cc, 
           inset -4px -4px 8px ${bsColors.darkTheme.bg.light}cc`,
      dark: `inset 4px 4px 8px ${bsColors.darkTheme.dark.dark}cc, 
             inset -4px -4px 8px ${bsColors.darkTheme.dark.light}cc`,
    },
  },
};

export const baseTheme = {
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
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  bs: bs.lightTheme,
  colors: colors.lightTheme,
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  bs: bs.darkTheme,
  colors: colors.darkTheme,
};
