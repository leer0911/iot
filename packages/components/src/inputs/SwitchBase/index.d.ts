import * as React from 'react';

export interface SwitchBaseProps {
  autoFocus?: boolean;
  checked?: boolean;
  checkedIcon: React.ReactNode;
  defaultChecked?: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
  icon: React.ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  inputRef?: React.Ref<any>;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  readOnly?: boolean;
  required?: boolean;
  tabIndex?: number;
  value?: unknown;
}

declare const SwitchBase: React.ComponentType<SwitchBaseProps>;

export default SwitchBase;
