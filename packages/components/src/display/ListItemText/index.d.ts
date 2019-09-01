import * as React from 'react';
import { TypographyProps } from '../Typography';

export interface ListItemTextProps {
  inset?: boolean;
  disableTypography?: boolean;
  primary?: React.ReactNode;
  primaryTypographyProps?: Partial<TypographyProps>;
  secondary?: React.ReactNode;
  secondaryTypographyProps?: Partial<TypographyProps>;
}

declare const ListItemText: React.ComponentType<ListItemTextProps>;

export default ListItemText;
