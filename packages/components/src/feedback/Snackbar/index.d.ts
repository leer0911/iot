import * as React from 'react';
import { SnackbarContentProps } from '../SnackbarContent';
import { ClickAwayListenerProps } from '../ClickAwayListener';

export interface SnackbarOrigin {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

export interface SnackbarProps {
  action?: SnackbarContentProps['action'];
  anchorOrigin?: SnackbarOrigin;
  autoHideDuration?: number | null;
  ClickAwayListenerProps?: Partial<ClickAwayListenerProps>;
  ContentProps?: Partial<SnackbarContentProps>;
  message?: SnackbarContentProps['message'];
  onClose?: (event: React.SyntheticEvent<any>, reason: string) => void;
  open: boolean;
  TransitionComponent?: React.ComponentType;
}

declare const Snackbar: React.ComponentType<SnackbarProps>;

export default Snackbar;
