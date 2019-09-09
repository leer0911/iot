import { ButtonBaseProps } from '../ButtonBase';

export interface ButtonProps extends ButtonBaseProps {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  fullWidth: boolean;
}

declare const Button: React.ComponentType<ButtonProps>;

export default Button;
