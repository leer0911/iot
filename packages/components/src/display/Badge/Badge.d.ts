import * as React from 'react';
import { PropTypes } from '../../..';

export interface BadgeProps {
  badgeContent?: React.ReactNode;
  children: React.ReactNode;
  color?: PropTypes.Color | 'error';
  component?: React.ElementType<React.HTMLAttributes<HTMLDivElement>>;
  invisible?: boolean;
  max?: number;
  showZero?: boolean;
  variant?: 'standard' | 'dot';
}

declare const Badge: React.ComponentType<BadgeProps>;

export default Badge;
