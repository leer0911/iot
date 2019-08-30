import * as React from 'react';
import { StandardProps } from '..';

export interface InputBaseProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onKeyUp' | 'onKeyDown' | 'defaultValue'> {
  autoComplete?: string;
  autoFocus?: boolean;
  defaultValue?: unknown;
  disabled?: boolean;
  endAdornment?: React.ReactNode;
  error?: boolean;
  fullWidth?: boolean;
  id?: string;
  inputComponent?: React.ElementType<InputBaseComponentProps>;
  inputProps?: InputBaseComponentProps;
  inputRef?: React.Ref<any> | React.RefObject<any>;
  margin?: 'dense' | 'none';
  multiline?: boolean;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  rows?: string | number;
  rowsMax?: string | number;
  startAdornment?: React.ReactNode;
  type?: string;
  value?: unknown;
  onFilled?: () => void;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

declare const InputBase: React.ComponentType<InputBaseProps>;

export default InputBase;
