import * as React from 'react';
import { IconButtonProps } from '../IconButton';

export interface SwitchBaseProps extends IconButtonProps {
  autoFocus?: boolean;
  checked?: boolean;
  checkedIcon: React.ReactNode;
  defaultChecked?: boolean;
  icon: React.ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  readOnly?: boolean;
  required?: boolean;
  value?: unknown;
}

declare const SwitchBase: React.ComponentType<SwitchBaseProps>;

export default SwitchBase;
