import * as React from 'react';
import { PropTypes } from '../..';
import { FormControlProps } from '../FormControl';
import { FormHelperTextProps } from '../FormHelperText';
import { InputProps as StandardInputProps } from '../Input';
import { FilledInputProps } from '../FilledInput';
import { OutlinedInputProps } from '../OutlinedInput';
import { InputLabelProps } from '../InputLabel';

export interface BaseTextFieldProps {
  autoComplete?: string;
  autoFocus?: boolean;
  children?: React.ReactNode;
  defaultValue?: unknown;
  disabled?: boolean;
  error?: boolean;
  FormHelperTextProps?: Partial<FormHelperTextProps>;
  fullWidth?: boolean;
  helperText?: React.ReactNode;
  id?: string;
  InputLabelProps?: Partial<InputLabelProps>;
  inputRef?: React.Ref<any>;
  label?: React.ReactNode;
  margin?: PropTypes.Margin;
  multiline?: boolean;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
  placeholder?: string;
  required?: boolean;
  rows?: string | number;
  rowsMax?: string | number;
  type?: string;
  value?: unknown;
}

export interface StandardTextFieldProps extends BaseTextFieldProps {
  variant?: 'standard';
  InputProps?: Partial<StandardInputProps>;
  inputProps?: StandardInputProps['inputProps'];
}

export interface FilledTextFieldProps extends BaseTextFieldProps {
  variant: 'filled';
  InputProps?: Partial<FilledInputProps>;
  inputProps?: FilledInputProps['inputProps'];
}

export interface OutlinedTextFieldProps extends BaseTextFieldProps {
  variant: 'outlined';
  InputProps?: Partial<OutlinedInputProps>;
  inputProps?: OutlinedInputProps['inputProps'];
}

export type TextFieldProps = StandardTextFieldProps | FilledTextFieldProps | OutlinedTextFieldProps;

declare const TextField: React.ComponentType<TextFieldProps>;

export default TextField;
