import * as React from 'react';
import { Orientation } from '../Stepper';

export type StepButtonIcon = React.ReactElement | string | number | null;

export interface StepButtonProps {
  active?: boolean;
  alternativeLabel?: boolean;
  completed?: boolean;
  disabled?: boolean;
  icon?: StepButtonIcon;
  last?: boolean;
  optional?: React.ReactNode;
  orientation?: Orientation;
}

declare const StepButton: React.ComponentType<StepButtonProps>;

export default StepButton;
