import { FadeProps } from '../Fade';

export interface BackdropProps extends FadeProps {
  invisible?: boolean;
  open: boolean;
}

declare const Backdrop: React.ComponentType<BackdropProps>;

export default Backdrop;
