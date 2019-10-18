import * as React from 'react';

export type ThemeStyle = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';

type Style = ThemeStyle | 'srOnly';

export interface TypographyProps {
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
  color?: 'initial' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
  display?: 'initial' | 'block' | 'inline';
  gutterBottom?: boolean;
  noWrap?: boolean;
  paragraph?: boolean;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  variant?: Style | 'inherit';
  variantMapping?: { [type in Style]: string };
}

declare const Typography: React.ComponentType<TypographyProps>;

export default Typography;
