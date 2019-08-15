import deepmerge from 'deepmerge';

import createPalette from './createPalette';
import createSpacing from './createSpacing';
import createTypography from './createTypography';
import createBreakpoints from './createBreakpoints';
import createMixins from './createMixins';

import { shadows as _shadows, shape, transitions, zIndex } from './default';

const createTheme = (options = {}) => {
  const {
    palette: paletteInput = {},
    spacing: spacingInput = {},
    typography: typographyInput = {},
    breakpoints: breakpointsInput = {},
    mixins: mixinsInput = {},
    shadows: shadowsInput,
    ...restOption
  } = options;

  const palette = createPalette(paletteInput);
  const spacing = createSpacing(spacingInput);
  const typography = createTypography(palette, typographyInput);
  const breakpoints = createBreakpoints(breakpointsInput);
  const mixins = createMixins(breakpoints, spacing, mixinsInput);

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
    mixins,
    shadows,
    ...themeMerged
  };
};

export default createTheme;
