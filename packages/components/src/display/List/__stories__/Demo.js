import React from 'react';
import { List, ListItem } from '../../../';

const Demo = () => {
  return (
    <List>
      <ListItem button divider>
        ListItem 1
      </ListItem>
      <ListItem button>ListItem 2</ListItem>
    </List>
  );
};

export default Demo;
