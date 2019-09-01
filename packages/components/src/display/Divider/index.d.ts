import * as React from 'react';

export interface DividerProps {
  component?: React.ElementType<React.HTMLAttributes<HTMLDivElement>>;
  absolute?: boolean;
  light?: boolean;
  variant?: 'fullWidth' | 'inset' | 'middle';
  orientation?: 'horizontal' | 'vertical';
}

declare const Divider: React.ComponentType<DividerProps>;

export default Divider;
