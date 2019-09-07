import * as React from 'react';

export interface FormHelperTextProps {
  disabled?: boolean;
  error?: boolean;
  filled?: boolean;
  focused?: boolean;
  component?: React.ElementType<React.HTMLAttributes<HTMLParagraphElement>>;
  margin?: 'dense';
  required?: boolean;
  variant?: 'standard' | 'outlined' | 'filled';
}

declare const FormHelperText: React.ComponentType<FormHelperTextProps>;

export default FormHelperText;
