import { Orientation } from '../Stepper';

export type StepConnectorIcon = React.ReactElement | string | number;

export interface StepConnectorProps {
  index?: number;
  orientation?: Orientation;
  active?: boolean;
  alternativeLabel?: boolean;
  completed?: boolean;
  disabled?: boolean;
}

declare const StepConnector: React.ComponentType<StepConnectorProps>;

export default StepConnector;
