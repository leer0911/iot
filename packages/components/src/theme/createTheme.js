const createTheme = (options = {}) => {
  const defaultTheme = {
    breakpoints: null,
    palette: null,
    shadows: null,
    typography: null,
    mixins: null,
    direction: 'ltr',
    overrides: {}, // Inject custom styles
    props: {}, // Inject custom properties
    spacing: spacing => {
      const spacingInput = 8;
      return spacingInput * spacing;
    }
  };
  return defaultTheme;
};

export default createTheme;
