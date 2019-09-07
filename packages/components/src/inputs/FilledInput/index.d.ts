import { InputBaseProps } from '../InputBase';

export interface FilledInputProps extends InputBaseProps {
  disableUnderline?: boolean;
}

declare const FilledInput: React.ComponentType<FilledInputProps>;

export default FilledInput;
