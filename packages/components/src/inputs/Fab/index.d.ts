import { PropTypes } from '../../';
import { ButtonProps } from '../Button';

export interface FabButtonBase extends ButtonProps {
  color?: PropTypes.Color;
  size?: 'small' | 'medium' | 'large';
  variant?: 'round' | 'extended';
}

declare const Fab: React.ComponentType<FabButtonBase>;

export default Fab;
