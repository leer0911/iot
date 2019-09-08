import * as React from 'react';

import { PaperProps } from '../../surfaces/Paper';

export interface SnackbarContentProps extends PaperProps {
  action?: React.ReactNode;
  message?: React.ReactNode;
}

declare const SnackbarContent: React.ComponentType<SnackbarContentProps>;

export default SnackbarContent;
