export interface ButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  centerRipple?: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
}

declare const Button: React.ComponentType<ButtonProps>;

export default Button;
