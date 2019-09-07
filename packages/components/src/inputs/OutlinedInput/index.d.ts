import * as React from 'react';
import { StandardProps } from '..';
import { InputBaseProps } from '../InputBase';

export interface OutlinedInputProps extends StandardProps<InputBaseProps, OutlinedInputClassKey> {
  notched?: boolean;
  labelWidth: number;
}

declare const OutlinedInput: React.ComponentType<OutlinedInputProps>;

export default OutlinedInput;
