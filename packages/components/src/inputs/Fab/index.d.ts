import { PropTypes } from '../../';
import { ButtonBaseProps } from '../ButtonBase';

export interface FabProps extends ButtonBaseProps {
  color?: PropTypes.Color;
  size?: 'small' | 'medium' | 'large';
  variant?: 'round' | 'extended';
}

declare const Fab: React.ComponentType<FabProps>;

export default Fab;
