import * as React from 'react';
import { ButtonBaseProps } from '../../inputs/ButtonBase';

export interface TabProps extends ButtonBaseProps {
  disableFocusRipple?: boolean;
  fullWidth?: boolean;
  icon?: string | React.ReactElement;
  label?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<{ checked: boolean }>, value: any) => void;
  onClick?: React.EventHandler<any>;
  selected?: boolean;
  style?: React.CSSProperties;
  textColor?: string | 'secondary' | 'primary' | 'inherit';
  value?: any;
  wrapped?: boolean;
}

declare const Tab: React.ComponentType<TabProps>;

export default Tab;
