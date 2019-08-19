import * as React from 'react';

export interface ListProps {
  props: {
    dense?: boolean;
    disablePadding?: boolean;
    subheader?: React.ReactElement;
  };
  defaultComponent: 'ul';
  classKey: ListClassKey;
}

declare const List: React.ComponentType<ListProps>;

export default List;
