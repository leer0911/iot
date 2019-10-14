export type Orientation = 'horizontal' | 'vertical';

export interface StepperProps {
  children: React.ReactNode;
  connector?: React.ReactElement | React.ReactNode;
  activeStep?: number;
  alternativeLabel?: boolean;
  nonLinear?: boolean;
  orientation?: Orientation;
}

declare const Stepper: React.ComponentType<StepperProps>;

export default Stepper;
