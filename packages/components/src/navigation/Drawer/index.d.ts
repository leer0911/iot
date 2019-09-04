import { ModalProps } from '../../feedback/Modal';
import { PaperProps } from '../../surfaces/Paper';
import { SlideProps } from '../../other/Slide';

export interface DrawerProps {
  variant?: 'permanent' | 'persistent' | 'temporary';
  anchor?: 'left' | 'top' | 'right' | 'bottom';
  elevation?: number;
  open?: boolean;
  ModalProps?: Partial<ModalProps>;
  PaperProps?: Partial<PaperProps>;
  SlideProps?: Partial<SlideProps>;
}

declare const Drawer: React.ComponentType<DrawerProps>;

export default Drawer;
