export interface TabsProps {
  component: React.ElementType;
  children?: React.ReactNode;
  value: any;
  variant?: 'standard' | 'scrollable' | 'fullWidth';
  orientation?: 'horizontal' | 'vertical';
  textColor?: 'secondary' | 'primary' | 'inherit' | string;
  indicatorColor?: 'secondary' | 'primary' | string;
  TabIndicatorProps?: Partial<React.HTMLAttributes<HTMLDivElement>>;
  scrollButtons?: 'auto' | 'desktop' | 'on' | 'off';
  ScrollButtonComponent?: React.ElementType;
  centered?: boolean;
  onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
}

declare const Tabs: React.ComponentType<TabsProps>;

export default Tabs;
