export { default as Box } from './layout/Box';
export { default as Grid } from './layout/Grid';
export { default as Button } from './inputs/Button';
export { default as IconButton } from './inputs/IconButton';
export { default as Typography } from './display/Typography';
export { default as Paper } from './surfaces/Paper';
export { default as AppBar } from './surfaces/AppBar';
export { default as Toolbar } from './surfaces/Toolbar';

export { default as useClasses } from './styles/useClasses';

export namespace PropTypes {
  type Alignment = 'inherit' | 'left' | 'center' | 'right' | 'justify';
  type Color = 'inherit' | 'primary' | 'secondary' | 'default';
  type Margin = 'none' | 'dense' | 'normal';
}
