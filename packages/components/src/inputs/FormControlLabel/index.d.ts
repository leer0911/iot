import * as React from 'react';

export interface FormControlLabelProps {
  control: React.ReactElement;
  checked?: boolean;
  disabled?: boolean;
  inputRef?: React.Ref<any>;
  label: React.ReactNode;
  name?: string;
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  onChange?: (event: React.ChangeEvent<{}>, checked: boolean) => void;
  value?: unknown;
}

declare const FormControlLabel: React.ComponentType<FormControlLabelProps>;

export default FormControlLabel;
