import { PropTypes } from '../..';
import { PaperProps } from '../Paper';

export interface AppBarProps extends PaperProps {
  color?: PropTypes.Color;
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
}

declare const AppBar: React.ComponentType<AppBarProps>;

export default AppBar;
