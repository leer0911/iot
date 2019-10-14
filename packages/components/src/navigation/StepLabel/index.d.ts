import { Orientation } from '../Stepper';
import { StepButtonIcon } from '../StepButton';
import { StepIconProps } from '../StepIcon';

export interface StepLabelProps {
  active?: boolean;
  alternativeLabel?: boolean;
  children: React.ReactNode;
  completed?: boolean;
  disabled?: boolean;
  error?: boolean;
  icon?: StepButtonIcon;
  last?: boolean;
  optional?: React.ReactNode;
  orientation?: Orientation;
  StepIconComponent?: React.ElementType;
  StepIconProps?: Partial<StepIconProps>;
}

declare const StepLabel: React.ComponentType<StepLabelProps>;

export default StepLabel;
