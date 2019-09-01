import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar } from '../../../';

const Demo = () => {
  return (
    <List>
      <ListItem divider>
        <ListItemAvatar>
          <Avatar>H</Avatar>
        </ListItemAvatar>
      </ListItem>

      <ListItem button divider>
        ListItem 1
      </ListItem>
      <ListItem button>ListItem 2</ListItem>
    </List>
  );
};

export default Demo;
