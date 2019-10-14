import { Orientation } from '../Stepper';

export interface StepContentProps {
  children: React.ReactNode;
  optional?: boolean;
  orientation?: Orientation;
  alternativeLabel?: boolean;
  active?: boolean;
  completed?: boolean;
  last?: boolean;
}

declare const StepContent: React.ComponentType<StepContentProps>;

export default StepContent;
