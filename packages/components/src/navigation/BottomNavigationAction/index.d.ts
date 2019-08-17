import * as React from 'react';
import { ButtonProps } from '../../inputs/Button';
import { SimplifiedPropsOf } from '../OverridableComponent';

export interface BottomNavigationActionProps extends ButtonProps {
  icon?: string | React.ReactElement;
  label?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
  onClick?: React.ReactEventHandler<any>;
  selected?: boolean;
  showLabel?: boolean;
  value?: any;
}

declare const BottomNavigationAction: React.ComponentType<BottomNavigationActionProps>;

export default BottomNavigationAction;
