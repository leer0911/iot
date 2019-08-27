import * as React from 'react';

export interface PortalProps {
  children: React.ReactElement;
  container?: React.ReactInstance | (() => React.ReactInstance) | null;
  disablePortal?: boolean;
  onRendered?: () => void;
}

declare const Portal: React.ComponentType<PortalProps>;

export default Portal;
