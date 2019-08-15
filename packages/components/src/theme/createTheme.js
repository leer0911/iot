import indigo from '../colors/indigo';
import pink from '../colors/pink';
import red from '../colors/red';
import grey from '../colors/grey';
import common from '../colors/common';
import shadows from './shadows';

import { getContrastRatio, darken, lighten } from '../styles/colorManipulator';

const tonalOffset = 0.2;

function addLightOrDark(intent, direction, shade, tonalOffset) {
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = lighten(intent.main, tonalOffset);
    } else if (direction === 'dark') {
      intent.dark = darken(intent.main, tonalOffset * 1.5);
    }
  }
}

function getContrastText(background) {
  const contrastText =
    getContrastRatio(background, dark.text.primary) >= 3
      ? dark.text.primary
      : light.text.primary;

  return contrastText;
}

function augmentColor(
  color,
  mainShade = 500,
  lightShade = 300,
  darkShade = 700
) {
  color = { ...color };
  if (!color.main && color[mainShade]) {
    color.main = color[mainShade];
  }

  addLightOrDark(color, 'light', lightShade, tonalOffset);
  addLightOrDark(color, 'dark', darkShade, tonalOffset);
  if (!color.contrastText) {
    color.contrastText = getContrastText(color.main);
  }

  return color;
}

export const formatMs = milliseconds => `${Math.round(milliseconds)}ms`;

export const easing = {
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
};

export const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195
};

export const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common.white,
    default: grey[50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.08)',
    hoverOpacity: 0.08,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.14)',
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)'
  }
};

export const dark = {
  text: {
    primary: common.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: grey[800],
    default: '#303030'
  },
  action: {
    active: common.white,
    hover: 'rgba(255, 255, 255, 0.1)',
    hoverOpacity: 0.1,
    selected: 'rgba(255, 255, 255, 0.2)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)'
  }
};

const createTheme = (options = {}) => {
  const primary = {
    light: indigo[300],
    main: indigo[500],
    dark: indigo[700]
  };
  const secondary = {
    light: pink.A200,
    main: pink.A400,
    dark: pink.A700
  };
  const error = {
    light: red[300],
    main: red[500],
    dark: red[700]
  };
  const defaultTheme = {
    breakpoints: null,
    palette: {
      type: 'light',
      grey,
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.38)',
        hint: 'rgba(0, 0, 0, 0.38)'
      },
      action: {
        active: 'rgba(0, 0, 0, 0.54)',
        hover: 'rgba(0, 0, 0, 0.08)',
        hoverOpacity: 0.08,
        selected: 'rgba(0, 0, 0, 0.14)',
        disabled: 'rgba(0, 0, 0, 0.26)',
        disabledBackground: 'rgba(0, 0, 0, 0.12)'
      },
      primary: augmentColor(primary),
      secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
      error: augmentColor(error),
      getContrastText
    },
    shadows,
    typography: null,
    mixins: null,
    direction: 'ltr',
    overrides: {}, // Inject custom styles
    props: {}, // Inject custom properties
    spacing: spacing => {
      const spacingInput = 8;
      return spacingInput * spacing;
    },
    shape: {
      borderRadius: 4
    },
    transitions: {
      easing,
      duration,
      create: (props = ['all'], options = {}) => {
        const {
          duration: durationOption = duration.standard,
          easing: easingOption = easing.easeInOut,
          delay = 0
        } = options;

        return (Array.isArray(props) ? props : [props])
          .map(
            animatedProp =>
              `${animatedProp} ${
                typeof durationOption === 'string'
                  ? durationOption
                  : formatMs(durationOption)
              } ${easingOption} ${
                typeof delay === 'string' ? delay : formatMs(delay)
              }`
          )
          .join(',');
      }
    }
  };
  return defaultTheme;
};

export default createTheme;
