import * as React from 'react';
import { borders, ComposedStyleFunction, display, flexbox, palette, positions, shadows, sizing, spacing, typography, PropsFor, Omit } from '@iot/ui-system';

type BoxStyleFunction = ComposedStyleFunction<
  [
    typeof borders,
    typeof display,
    typeof flexbox,
    typeof palette,
    typeof positions,
    typeof shadows,
    typeof sizing,
    typeof spacing,
    typeof typography
  ]
>;

type SystemProps = PropsFor<BoxStyleFunction>;
type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, keyof SystemProps>;

export interface BoxProps extends ElementProps {
  as?: React.ElementType;
}

declare const Box: React.ComponentType<BoxProps>;

export default Box;
