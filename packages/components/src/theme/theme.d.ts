import { Color, PaletteType, CommonColors } from '..';

// -------------------------------------------------------- Shape
export interface Shape {
  borderRadius: number;
}

// -------------------------------------------------------- Breakpoints
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type BreakpointValues = { [key in Breakpoint]: number };
export const keys: Breakpoint[];
export interface Breakpoints {
  keys: Breakpoint[];
  values: BreakpointValues;
  up: (key: Breakpoint | number) => string;
  down: (key: Breakpoint | number) => string;
  between: (start: Breakpoint, end: Breakpoint) => string;
  only: (key: Breakpoint) => string;
  width: (key: Breakpoint) => number;
}

// -------------------------------------------------------- Breakpoints
export type Direction = 'ltr' | 'rtl';

// -------------------------------------------------------- Mixins
export interface Mixins {
  gutters: (styles?: CSSProperties) => CSSProperties;
  toolbar: CSSProperties;
}

// -------------------------------------------------------- Palette
export interface TypeText {
  primary: string;
  secondary: string;
  disabled: string;
  hint: string;
}

export interface TypeAction {
  active: string;
  hover: string;
  hoverOpacity: number;
  selected: string;
  disabled: string;
  disabledBackground: string;
}

export interface PaletteColor {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

export type TypeDivider = string;

export interface TypeBackground {
  default: string;
  paper: string;
}

export interface Palette {
  common: CommonColors;
  type: PaletteType;
  contrastThreshold: number;
  tonalOffset: number;
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  grey: Color;
  text: TypeText;
  divider: TypeDivider;
  action: TypeAction;
  background: TypeBackground;
  getContrastText: (background: string) => string;
  augmentColor: {
    (color: ColorPartial, mainShade?: number | string, lightShade?: number | string, darkShade?: number | string): PaletteColor;
    (color: PaletteColorOptions): PaletteColor;
  };
}

// -------------------------------------------------------- Shadows
export type Shadows = [
  'none',
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];

// -------------------------------------------------------- Spacing
export type SpacingArgument = number;

export interface Spacing {
  (): number;
  (value1: SpacingArgument): number;
  (value1: SpacingArgument, value2: SpacingArgument): string;
  (value1: SpacingArgument, value2: SpacingArgument, value3: SpacingArgument): string;
  (value1: SpacingArgument, value2: SpacingArgument, value3: SpacingArgument, value4: SpacingArgument): string;
}

// -------------------------------------------------------- Typography
export type ThemeStyle = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';

export interface FontStyle
  extends Required<{
    fontFamily: CSSProperties['fontFamily'];
    fontSize: number;
    fontWeightLight: CSSProperties['fontWeight'];
    fontWeightRegular: CSSProperties['fontWeight'];
    fontWeightMedium: CSSProperties['fontWeight'];
    fontWeightBold: CSSProperties['fontWeight'];
  }> {}

export interface FontStyleOptions extends Partial<FontStyle> {
  htmlFontSize?: number;
  allVariants?: CSSProperties;
}

export type TypographyStyle = Required<Pick<CSSProperties, 'fontFamily' | 'fontSize' | 'fontWeight' | 'fontStyle' | 'color'>> &
  Partial<Pick<CSSProperties, 'letterSpacing' | 'lineHeight' | 'textTransform'>>;

export interface TypographyStyleOptions extends Partial<TypographyStyle> {}

export interface TypographyUtils {
  pxToRem: (px: number) => string;
}

export interface Typography extends Record<ThemeStyle, TypographyStyle>, FontStyle, TypographyUtils {}

// -------------------------------------------------------- ZIndex
export interface ZIndex {
  mobileStepper: number;
  appBar: number;
  drawer: number;
  modal: number;
  snackbar: number;
  tooltip: number;
}

// -------------------------------------------------------- Transitions
export interface Easing {
  easeInOut: string;
  easeOut: string;
  easeIn: string;
  sharp: string;
}
export interface Duration {
  shortest: number;
  shorter: number;
  short: number;
  standard: number;
  complex: number;
  enteringScreen: number;
  leavingScreen: number;
}
export interface Transitions {
  easing: Easing;
  duration: Duration;
  create(props: string | string[], options?: Partial<{ duration: number | string; easing: string; delay: number | string }>): string;
  getAutoHeightDuration(height: number): number;
}
