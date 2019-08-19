import * as React from 'react';
import { ExtendButtonBase } from '../../inputs/ButtonBase';

export interface ListItemProps extends ExtendButtonBase {
  alignItems?: 'flex-start' | 'center';
  autoFocus?: boolean;
  button?: boolean;
  ContainerComponent?: React.ElementType<React.HTMLAttributes<HTMLDivElement>>;
  ContainerProps?: React.HTMLAttributes<HTMLDivElement>;
  dense?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
  divider?: boolean;
  focusVisibleClassName?: string;
  selected?: boolean;
}

declare const ListItem: React.ComponentType<ListItemProps>;

export default ListItem;
