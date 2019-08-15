export interface ButtonProps {
  as?: React.ElementType;
  fullWidth?: boolean;
  href?: string;
  color?: 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'contained';
}

declare const Button: React.ComponentType<ButtonProps>;

export default Button;
