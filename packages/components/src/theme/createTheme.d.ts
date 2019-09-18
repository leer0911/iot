import { Shape, Breakpoints, Mixins, Palette, Shadows, Typography, ZIndex } from './theme';

export interface Theme {
  shape: Shape;
  breakpoints: Breakpoints;
  direction: Direction;
  mixins: Mixins;
  overrides?: Overrides;
  palette: Palette;
  shadows: Shadows;
  spacing: Spacing;
  transitions: Transitions;
  typography: Typography;
  zIndex: ZIndex;
}

// 此处 options 类型只为智能提示
export default function createTheme(options?: Theme): Theme;
