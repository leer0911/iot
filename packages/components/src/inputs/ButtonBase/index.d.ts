import * as React from 'react';
import { TouchRippleProps } from './TouchRipple';

export interface ButtonBaseTypeMap {
  props: {
    action?: (actions: ButtonBaseActions) => void;
    centerRipple?: boolean;
    disabled?: boolean;
    disableRipple?: boolean;
    disableTouchRipple?: boolean;
    TouchRippleProps?: Partial<TouchRippleProps>;
  };
}

export interface ExtendButtonBaseTypeMap<M extends OverridableTypeMap> {
  props: ButtonBaseTypeMap['props'] & M['props'];
}

export type ExtendButtonBase<M extends OverridableTypeMap> = ((props: { href: string } & OverrideProps<ExtendButtonBaseTypeMap<M>, 'a'>) => JSX.Element) &
  OverridableComponent<ExtendButtonBaseTypeMap<M>>;

declare const ButtonBase: ExtendButtonBase<ButtonBaseTypeMap>;

export type ButtonBaseProps = SimplifiedPropsOf<typeof ButtonBase>;

export default ButtonBase;
