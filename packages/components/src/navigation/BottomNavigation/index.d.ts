import * as React from 'react';

export interface BottomNavigationProps {
  children: React.ReactNode;
  component?: React.ElementType<React.HTMLAttributes<HTMLDivElement>>;
  onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
  showLabels?: boolean;
  value?: any;
}

declare const BottomNavigation: React.ComponentType<BottomNavigationProps>;

export default BottomNavigation;
