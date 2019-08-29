import * as React from 'react';
import { SwitchBaseProps } from '../SwitchBase';

export interface CheckboxProps extends SwitchBaseProps {
  indeterminateIcon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'default';
  indeterminate?: boolean;
}

declare const Checkbox: React.ComponentType<CheckboxProps>;

export default Checkbox;
