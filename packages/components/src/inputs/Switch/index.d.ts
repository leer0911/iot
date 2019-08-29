import { SwitchBaseProps } from '../SwitchBase';

export interface SwitchProps extends SwitchBaseProps {
  checkedIcon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'default';
  edge?: 'start' | 'end' | false;
  icon?: React.ReactNode;
}

declare const Switch: React.ComponentType<SwitchProps>;

export default Switch;
