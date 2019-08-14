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
    },
    transitions: {
      easing: {
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      duration: {
        shorter: 200
      }
    }
  };
  return defaultTheme;
};

export default createTheme;
