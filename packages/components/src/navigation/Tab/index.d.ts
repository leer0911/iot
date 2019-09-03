import { ButtonBaseProps } from '../../inputs/ButtonBase';

export interface TabProps extends ButtonBaseProps {
  icon?: React.ReactElement;
  label?: React.ReactNode;
  textColor?: 'secondary' | 'primary' | 'inherit';
  selected?: boolean;
  wrapped?: boolean;
  value?: any;
  onChange?: (event: React.ChangeEvent<{ checked: boolean }>, value: any) => void;
  onClick?: React.EventHandler<any>;
}

declare const Tab: React.ComponentType<TabProps>;

export default Tab;
