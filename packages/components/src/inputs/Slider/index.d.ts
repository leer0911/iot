import * as React from 'react';

export interface SliderProps {
  component?: React.ElementType<React.HTMLAttributes<HTMLSpanElement>>;
  value?: number | number[];
  defaultValue?: number | number[];
  disabled?: boolean;
  max?: number;
  min?: number;
  name?: string;
  onChange?: (event: React.ChangeEvent<{}>, value: number | number[]) => void;
  onChangeCommitted?: (event: React.ChangeEvent<{}>, value: number | number[]) => void;
  orientation?: 'horizontal' | 'vertical';
  step?: number | null;
  ThumbComponent?: React.ElementType<React.HTMLAttributes<HTMLSpanElement>>;
  ValueLabelComponent?: React.ElementType<ValueLabelProps>;
  valueLabelDisplay?: 'on' | 'auto' | 'off';
  valueLabelFormat?: string | ((value: number, index: number) => React.ReactNode);
}

declare const Slider: React.ComponentType<SliderProps>;

export default Slider;
