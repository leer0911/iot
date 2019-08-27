import * as React from 'react';
import { PortalProps } from '../Portal';

export interface ModalProps extends PortalProps {
  BackdropComponent?: React.ElementType<BackdropProps>;
  BackdropProps?: Partial<BackdropProps>;
  children: React.ReactElement;
  container?: PortalProps['container'];
  disableBackdropClick?: boolean;
  disablePortal?: PortalProps['disablePortal'];
  hideBackdrop?: boolean;
  keepMounted?: boolean;
  onBackdropClick?: React.ReactEventHandler<{}>;
  onClose?: {
    bivarianceHack(event: {}, reason: 'backdropClick' | 'escapeKeyDown'): void;
  }['bivarianceHack'];
  onRendered?: PortalProps['onRendered'];
  open: boolean;
}

declare const Modal: React.ComponentType<ModalProps>;

export default Modal;
