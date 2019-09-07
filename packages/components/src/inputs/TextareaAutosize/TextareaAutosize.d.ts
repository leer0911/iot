import * as React from 'react';

export interface TextareaAutosizeProps {
  rowsMax?: string | number;
}

declare const TextareaAutosize: React.ComponentType<TextareaAutosizeProps>;

export default TextareaAutosize;
