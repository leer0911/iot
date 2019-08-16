import { PropTypes } from '..';
import { ButtonProps } from '../Button';

export interface IconButtonProps extends ButtonProps {
  color?: PropTypes.Color;
  edge?: 'start' | 'end' | false;
  size?: 'small' | 'medium';
}

declare const IconButton: React.ComponentType<IconButtonProps>;

export default IconButton;
