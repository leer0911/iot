import * as React from 'react';
import { SwitchBaseProps } from '../SwitchBase';

export interface CheckboxProps extends SwitchBaseProps {
  checkedIcon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'default';
  icon?: React.ReactNode;
  indeterminate?: boolean;
  indeterminateIcon?: React.ReactNode;
}

declare const Checkbox: React.ComponentType<CheckboxProps>;

export default Checkbox;
