import { teal, indigo } from '@iot/components/src/colors';

export const THEME = {
  LIGHT_TEAL: 'Light teal',
  LIGHT_INDIGO: 'Light indigo',
  DARK: 'Dark',
  AMOLED_DARK: 'AMOLED dark',
};

const theme = {
  [THEME.LIGHT_TEAL]: {
    palette: {
      primary: { contrastText: '#fff', dark: teal[300], light: teal[600], main: teal.A700 },
    },
  },
  [THEME.LIGHT_INDIGO]: {
    palette: {
      primary: { contrastText: '#fff', dark: indigo[300], light: indigo[600], main: indigo.A700 },
    },
  },
  [THEME.DARK]: {
    palette: {
      type: 'dark',
    },
  },
  [THEME.AMOLED_DARK]: {},
};

export default theme;
