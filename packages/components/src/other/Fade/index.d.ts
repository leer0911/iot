import * as React from 'react';

export interface FadeProps {
  in: boolean;
  onEnter: () => {};
  onExit: () => {};
  style: object;
}

declare const Fade: React.ComponentType<FadeProps>;

export default Fade;
