import * as React from 'react';
import { ModalProps } from '../Modal';
import { PaperProps } from '../../surfaces/Paper';

export interface DialogProps extends ModalProps {
  fullScreen?: boolean;
  fullWidth?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  PaperComponent?: React.ComponentType;
  TransitionComponent?: React.ComponentType;
  PaperProps?: Partial<PaperProps>;
  scroll?: 'body' | 'paper';
}

declare const Dialog: React.ComponentType<DialogProps>;

export default Dialog;
