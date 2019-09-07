import * as React from 'react';

export interface FormLabelProps {
  disabled?: boolean;
  error?: boolean;
  filled?: boolean;
  focused?: boolean;
  required?: boolean;
}

declare const FormLabel: React.ComponentType<FormLabelProps>;

export default FormLabel;
