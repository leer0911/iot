import * as React from 'react';

export interface DividerProps {
  absolute?: boolean;
  light?: boolean;
  variant?: 'fullWidth' | 'inset' | 'middle';
}

declare const Divider: React.ComponentType<DividerProps>;

export default Divider;
