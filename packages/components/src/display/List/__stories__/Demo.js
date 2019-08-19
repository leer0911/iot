import React from 'react';
import { List, ListItem } from '../../../';

const Demo = () => {
  return (
    <List component="nav">
      <ListItem button>
        <div>1</div>
      </ListItem>
      <ListItem button>2 </ListItem>
    </List>
  );
};

export default Demo;
