import * as React from 'react';

export interface CircularProgressProps {
  color?: 'primary' | 'secondary' | 'inherit';
  disableShrink?: boolean;
  size?: number | string;
  thickness?: number;
  value?: number;
  variant?: 'determinate' | 'indeterminate' | 'static';
}

declare const CircularProgress: React.ComponentType<CircularProgressProps>;

export default CircularProgress;
