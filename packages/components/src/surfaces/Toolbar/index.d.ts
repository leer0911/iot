import * as React from 'react';

export interface ToolbarProps {
  component?: React.ElementType<React.HTMLAttributes<HTMLDivElement>>;
  disableGutters?: boolean;
  variant?: 'regular' | 'dense';
}

declare const Toolbar: React.ComponentType<ToolbarProps>;

export default Toolbar;
