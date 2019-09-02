import * as React from 'react';

export interface CircularProgressProps {
  variant?: 'determinate' | 'indeterminate' | 'static';
  color?: 'primary' | 'secondary' | 'inherit';
  disableShrink?: boolean;
  size?: number | string;
  thickness?: number;
  value?: number;
}

declare const CircularProgress: React.ComponentType<CircularProgressProps>;

export default CircularProgress;
