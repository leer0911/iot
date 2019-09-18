export { default as Box } from './layout/Box';
export { default as Grid } from './layout/Grid';

export { default as Button } from './inputs/Button';
export { default as IconButton } from './inputs/IconButton';
export { default as Fab } from './inputs/Fab';
export { default as SwitchBase } from './inputs/SwitchBase';
export { default as Radio } from './inputs/Radio';
export { default as Switch } from './inputs/Switch';
export { default as Checkbox } from './inputs/Checkbox';
export { default as Slider } from './inputs/Slider';

export { default as InputBase } from './inputs/InputBase';
export { default as Input } from './inputs/Input';
export { default as InputAdornment } from './inputs/InputAdornment';
export { default as InputLabel } from './inputs/InputLabel';
export { default as FilledInput } from './inputs/FilledInput';
export { default as OutlinedInput } from './inputs/OutlinedInput';
export { default as TextField } from './inputs/TextField';

export { default as Typography } from './display/Typography';
export { default as SvgIcon } from './display/SvgIcon';
export { default as Badge } from './display/Badge';
export { default as Divider } from './display/Divider';
export { default as List } from './display/List';
export { default as ListItem } from './display/ListItem';
export { default as ListItemAvatar } from './display/ListItemAvatar';
export { default as ListItemIcon } from './display/ListItemIcon';
export { default as ListItemText } from './display/ListItemText';
export { default as ListSubheader } from './display/ListSubheader';
export { default as ListItemSecondaryAction } from './display/ListItemSecondaryAction';
export { default as Avatar } from './display/Avatar';
export { default as Chip } from './display/Chip';

export { default as Paper } from './surfaces/Paper';
export { default as AppBar } from './surfaces/AppBar';
export { default as Toolbar } from './surfaces/Toolbar';

export { default as BottomNavigation } from './navigation/BottomNavigation';
export { default as BottomNavigationAction } from './navigation/BottomNavigationAction';
export { default as Tab } from './navigation/Tab';
export { default as Tabs } from './navigation/Tabs';
export { default as Drawer } from './navigation/Drawer';

export { default as CircularProgress } from './feedback/CircularProgress';
export { default as Modal } from './feedback/Modal';
export { default as Dialog } from './feedback/Dialog';
export { default as DialogActions } from './feedback/DialogActions';
export { default as DialogContent } from './feedback/DialogContent';
export { default as DialogContentText } from './feedback/DialogContentText';
export { default as DialogTitle } from './feedback/DialogTitle';
export { default as Snackbar } from './feedback/Snackbar';

export { default as Fade } from './other/Fade';
export { default as Backdrop } from './other/Backdrop';
export { default as Slide } from './other/Slide';
export { default as CssBaseline } from './other/CssBaseline';
export { default as Grow } from './other/Grow';
export { default as ClickAwayListener } from './other/ClickAwayListener';

export { default as useClasses } from './styles/useClasses';

export { default as common } from './colors/common';
export { default as red } from './colors/red';
export { default as pink } from './colors/pink';
export { default as purple } from './colors/purple';
export { default as deepPurple } from './colors/deepPurple';
export { default as indigo } from './colors/indigo';
export { default as blue } from './colors/blue';
export { default as lightBlue } from './colors/lightBlue';
export { default as cyan } from './colors/cyan';
export { default as teal } from './colors/teal';
export { default as green } from './colors/green';
export { default as lightGreen } from './colors/lightGreen';
export { default as lime } from './colors/lime';
export { default as yellow } from './colors/yellow';
export { default as amber } from './colors/amber';
export { default as orange } from './colors/orange';
export { default as deepOrange } from './colors/deepOrange';
export { default as brown } from './colors/brown';
export { default as grey } from './colors/grey';
export { default as blueGrey } from './colors/blueGrey';

export { default as createTheme } from './theme/createTheme';
export { default as useTheme } from './theme/useTheme';
export { default as defaultTheme } from './theme/defaultTheme';
export { default as ThemeContext } from './theme/ThemeContext';

export interface CommonColors {
  black: string;
  white: string;
}

export type PaletteType = 'light' | 'dark';
export interface Color {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}

export namespace PropTypes {
  type Alignment = 'inherit' | 'left' | 'center' | 'right' | 'justify';
  type Color = 'inherit' | 'primary' | 'secondary' | 'default';
  type Margin = 'none' | 'dense' | 'normal';
}
