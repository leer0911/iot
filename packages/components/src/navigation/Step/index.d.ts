import { Orientation } from '../Stepper';

export interface StepProps {
  active?: boolean;
  alternativeLabel?: boolean;
  children?: React.ReactNode;
  completed?: boolean;
  connector?: React.ReactElement;
  disabled?: boolean;
  index?: number;
  last?: boolean;
  orientation?: Orientation;
}

declare const Step: React.ComponentType<StepProps>;

export default Step;
