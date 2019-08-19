export { default as Box } from './layout/Box';
export { default as Grid } from './layout/Grid';

export { default as Button } from './inputs/Button';
export { default as IconButton } from './inputs/IconButton';
export { default as Fab } from './inputs/Fab';
export { default as SwitchBase } from './inputs/SwitchBase';
export { default as Radio } from './inputs/Radio';
export { default as RadioGroup } from './inputs/RadioGroup';
export { default as Switch } from './inputs/Switch';
export { default as Checkbox } from './inputs/Checkbox';
export { default as InputBase } from './inputs/InputBase';

export { default as Typography } from './display/Typography';
export { default as SvgIcon } from './display/SvgIcon';
export { default as Divider } from './display/Divider';
export { default as List } from './display/List';
export { default as ListItem } from './display/ListItem';

export { default as Paper } from './surfaces/Paper';
export { default as AppBar } from './surfaces/AppBar';
export { default as Toolbar } from './surfaces/Toolbar';

export { default as BottomNavigation } from './navigation/BottomNavigation';
export { default as BottomNavigationAction } from './navigation/BottomNavigationAction';

export { default as useClasses } from './styles/useClasses';

export namespace PropTypes {
  type Alignment = 'inherit' | 'left' | 'center' | 'right' | 'justify';
  type Color = 'inherit' | 'primary' | 'secondary' | 'default';
  type Margin = 'none' | 'dense' | 'normal';
}
