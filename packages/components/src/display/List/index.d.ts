import * as React from 'react';

export interface ListProps {
  dense?: boolean;
  disablePadding?: boolean;
  subheader?: React.ReactElement;
}

declare const List: React.ComponentType<ListProps>;

export default List;
