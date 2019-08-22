import * as React from 'react';
import { ButtonBaseProps } from '../../inputs/ButtonBase';

export interface TabsActions {
  updateIndicator(): void;
}

export interface TabIndicatorProps {
  color: 'secondary' | 'primary' | string;
  style: { left: number; width: number };
}

export interface TabsProps extends ButtonBaseProps {
  action?: (actions: TabsActions) => void;
  centered?: boolean;
  children?: React.ReactNode;
  indicatorColor?: 'secondary' | 'primary' | string;
  onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
  ScrollButtonComponent?: React.ElementType;
  scrollButtons?: 'auto' | 'desktop' | 'on' | 'off';
  TabIndicatorProps?: Partial<TabIndicatorProps>;
  textColor?: 'secondary' | 'primary' | 'inherit' | string;
  value: any;
  variant?: 'standard' | 'scrollable' | 'fullWidth';
  width?: string;
}

declare const Tabs: React.ComponentType<TabsProps>;

export default Tabs;
