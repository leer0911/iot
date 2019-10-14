export interface StepIconProps {
  active?: boolean;
  completed?: boolean;
  error?: boolean;
  icon: React.ReactNode;
}

declare const StepIcon: React.ComponentType<StepIconProps>;

export default StepIcon;
