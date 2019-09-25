import { ButtonProps } from '../Button';

export interface ButtonGroupProps extends ButtonProps {
  variant?: 'outlined' | 'contained';
}

declare const ButtonGroup: React.ComponentType<ButtonGroupProps>;

export default ButtonGroup;
