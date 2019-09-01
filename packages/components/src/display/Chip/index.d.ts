import * as React from 'react';
import { PropTypes } from '../../../';

export interface ChipProps {
  avatar?: React.ReactElement;
  clickable?: boolean;
  color?: PropTypes.Color;
  deleteIcon?: React.ReactElement;
  icon?: React.ReactElement;
  label?: React.ReactNode;
  onDelete?: React.EventHandler<any>;
  variant?: 'default' | 'outlined';
}

declare const Chip: React.ComponentType<ChipProps>;

export default Chip;
