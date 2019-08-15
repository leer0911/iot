import * as React from 'react';

export interface PaperProps {
  component?: React.ElementType<React.HTMLAttributes<HTMLDivElement>>;
  elevation?: number;
  square?: boolean;
}

declare const Paper: React.ComponentType<PaperProps>;

export default Paper;
