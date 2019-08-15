import deepmerge from 'deepmerge';
import { indigo, pink, grey, red, common } from '../colors';
import { getContrastRatio, darken, lighten } from './colorManipulator';

export const light = {
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: common.white,
    default: grey[50]
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(0, 0, 0, 0.14)',
    disabled: 'rgba(0, 0, 0, 0.26)',
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

const paletteDefault = {
  type: 'light',
  contrastThreshold: 3,
  tonalOffset: 0.2,
  primary: {
    light: indigo[300],
    main: indigo[500],
    dark: indigo[700]
  },
  secondary: {
    light: pink.A200,
    main: pink.A400,
    dark: pink.A700
  },
  error: {
    light: red[300],
    main: red[500],
    dark: red[700]
  }
};

const createPalette = (options = {}) => {
  const {
    type = paletteDefault.type,
    contrastThreshold = paletteDefault.contrastThreshold,
    tonalOffset = paletteDefault.tonalOffset,
    primary = paletteDefault.primary,
    secondary = paletteDefault.secondary,
    error = paletteDefault.error,
    ...restOption
  } = options;

  const addLightOrDark = (color, type, shade, tonalOffset) => {
    if (color[type]) {
      return;
    }

    if (color.hasOwnProperty(shade)) {
      color[type] = color[shade];
      return;
    }

    if (type === 'light') {
      color.light = lighten(color.main, tonalOffset);
      return;
    }

    if (type === 'dark') {
      color.dark = darken(color.main, tonalOffset * 1.5);
      return;
    }
  };

  const getContrastText = background => {
    const contrastText =
      getContrastRatio(background, dark.text.primary) >= contrastThreshold
        ? dark.text.primary
        : light.text.primary;

    return contrastText;
  };

  // 用于完善颜色体系，比如添加，light，dark，contrastText (该颜色上的文本颜色)
  const augmentColor = (
    color,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  ) => {
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
  };

  const themeTypes = { dark, light };

  const palette = {
    type,
    primary: augmentColor(primary),
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    error: augmentColor(error),
    common,
    grey,
    contrastThreshold,
    tonalOffset,
    getContrastText,
    augmentColor,
    ...themeTypes[type]
  };

  const paletteMerged = deepmerge(palette, restOption, { clone: false });

  return paletteMerged;
};

export default createPalette;
