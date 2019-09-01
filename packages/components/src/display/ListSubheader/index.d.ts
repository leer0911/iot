import * as React from 'react';

export interface ListSubheaderProps {
  color?: 'default' | 'primary' | 'inherit';
  component?: React.ElementType<React.HTMLAttributes<HTMLDivElement>>;
  disableGutters?: boolean;
  disableSticky?: boolean;
  inset?: boolean;
}

declare const ListSubheader: React.ComponentType<ListSubheaderProps>;

export default ListSubheader;
