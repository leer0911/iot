import * as React from 'react';

export interface SwitchProps {
  checkedIcon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'default';
  icon?: React.ReactNode;
}

declare const Switch: React.ComponentType<SwitchProps>;

export default Switch;
