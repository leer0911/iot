export interface InputLabelProps {
  disableAnimation?: boolean;
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  margin?: 'dense';
  required?: boolean;
  shrink?: boolean;
  variant?: 'standard' | 'outlined' | 'filled';
}

declare const InputLabel: React.ComponentType<InputLabelProps>;

export default InputLabel;
