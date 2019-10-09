import { PaperProps } from '../../surface/Paper';
import { ModalProps } from '../../feedback/Modal';

export interface PopoverOrigin {
  vertical: 'top' | 'center' | 'bottom' | number;
  horizontal: 'left' | 'center' | 'right' | number;
}

export interface PopoverPosition {
  top: number;
  left: number;
}


export interface PopoverActions {
  updatePosition(): void;
}

export type PopoverReference = 'anchorEl' | 'anchorPosition' | 'none';

export interface PopoverProps {
  action?: React.Ref<PopoverActions>;
  anchorEl?: null | Element | ((element: Element) => Element);
  anchorOrigin?: PopoverOrigin;
  anchorPosition?: PopoverPosition;
  anchorReference?: PopoverReference;
  children?: React.ReactNode;
  elevation?: number;
  getContentAnchorEl?: null | ((element: Element) => Element);
  marginThreshold?: number;
  modal?: boolean;
  ModalClasses?: ModalProps['classes'];
  PaperProps?: Partial<PaperProps>;
  role?: string;
  transformOrigin?: PopoverOrigin;
  TransitionComponent?: React.ComponentType<TransitionProps>;
  transitionDuration?: TransitionProps['timeout'] | 'auto';
  TransitionProps?: TransitionProps;
}



declare const Popover: React.ComponentType<PopoverProps>;

export default Popover;
