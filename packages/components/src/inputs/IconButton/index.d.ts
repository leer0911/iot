import { PropTypes } from '..';
import { ButtonBaseProps } from '../ButtonBase';

export interface IconButtonProps extends ButtonBaseProps {
  color?: PropTypes.Color;
  edge?: 'start' | 'end' | false;
  size?: 'small' | 'medium';
}

declare const IconButton: React.ComponentType<IconButtonProps>;

export default IconButton;
