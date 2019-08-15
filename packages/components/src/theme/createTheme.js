import deepmerge from 'deepmerge';

import createPalette from './createPalette';
import createSpacing from './createSpacing';
import createTypography from './createTypography';
import createBreakpoints from './createBreakpoints';

import { shadows as _shadows, shape, transitions, zIndex } from './default';

const createTheme = (options = {}) => {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    shadows: shadowsInput = {},
    spacing: spacingInput = {},
    typography: typographyInput = {},
    ...restOption
  } = options;

  const palette = createPalette(paletteInput);
  const spacing = createSpacing(spacingInput);
  const typography = createTypography(palette, typographyInput);
  const breakpoints = createBreakpoints(breakpointsInput);

  const shadows = shadowsInput || _shadows;

  const themeDefault = {
    shape,
    transitions,
    zIndex
  };

  const themeMerged = deepmerge(themeDefault, restOption);

  return {
    palette,
    spacing,
    typography,
    breakpoints,
    shadows,
    ...themeMerged
  };
};

export default createTheme;
