export interface ButtonBaseProps {
  component?: React.ElementType<React.HTMLAttributes<HTMLDivElement>>;
  centerRipple?: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
}

declare const ButtonBase: React.ComponentType<ButtonBaseProps>;

export default ButtonBase;
