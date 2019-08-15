import * as React from 'react';
import { PropTypes } from '../..';

export interface SvgIconProps {
  color?: PropTypes.Color | 'action' | 'disabled' | 'error';
  component?: React.ElementType<React.SVGProps<SVGSVGElement>>;
  fontSize?: 'inherit' | 'default' | 'small' | 'large';
  htmlColor?: string;
  shapeRendering?: string;
  titleAccess?: string;
  viewBox?: string;
}

declare const SvgIcon: React.ComponentType<SvgIconProps>;

export default SvgIcon;
