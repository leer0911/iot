import * as React from 'react';
import { ButtonBaseProps } from '../../inputs/ButtonBase';

export interface ListItemProps extends ButtonBaseProps {
  ContainerComponent?: React.ElementType<React.HTMLAttributes<HTMLDivElement>>;
  ContainerProps?: React.HTMLAttributes<HTMLDivElement>;
  alignItems?: 'flex-start' | 'center';
  button?: boolean;
  dense?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
  divider?: boolean;
  selected?: boolean;
}

declare const ListItem: React.ComponentType<ListItemProps>;

export default ListItem;
