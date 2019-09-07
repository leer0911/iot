import * as React from 'react';

export interface InputAdornmentProps {
  component?: React.ElementType<React.HTMLAttributes<HTMLDivElement>>;
  disablePointerEvents?: boolean;
  disableTypography?: boolean;
  position: 'start' | 'end';
  variant?: 'standard' | 'outlined' | 'filled';
}

declare const InputAdornment: React.ComponentType<InputAdornmentProps>;

export default InputAdornment;
