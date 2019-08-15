import * as React from 'react';

export interface TypographyProps {
  color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
  display?: 'initial' | 'block' | 'inline';
  gutterBottom?: boolean;
  noWrap?: boolean;
  paragraph?: boolean;
  // align?: PropTypes.Alignment;
  // variant?: Style | 'inherit';
  // variantMapping?: { [type in Style]: string };
}

declare const Typography: React.ComponentType<TypographyProps>;

export default Typography;
