import { PropTypes } from '../../';

export interface FormControlProps {
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  hiddenLabel?: boolean;
  margin?: PropTypes.Margin;
  onBlur?: React.EventHandler<any>;
  onFocus?: React.EventHandler<any>;
  required?: boolean;
  variant?: 'standard' | 'outlined' | 'filled';
}

declare const FormControl: React.ComponentType<FormControlProps>;

export default FormControl;
