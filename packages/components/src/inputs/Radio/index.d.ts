import * as React from 'react';
import { StandardProps } from '..';
import { SwitchBaseProps } from '../internal/SwitchBase';

export interface RadioProps extends SwitchBaseProps {
  color?: 'primary' | 'secondary' | 'default';
  checkedIcon?: React.ReactNode;
  icon?: React.ReactNode;
}

declare const Radio: React.ComponentType<RadioProps>;

export default Radio;
