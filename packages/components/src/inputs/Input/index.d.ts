import { InputBaseProps } from '../InputBase';

export interface InputProps extends InputBaseProps {
  disableUnderline?: boolean;
}

declare const Input: React.ComponentType<InputProps>;

export default Input;
