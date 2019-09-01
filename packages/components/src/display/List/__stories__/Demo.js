import React from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  Avatar,
} from '../../../';
import Search from '../../../icon/Search.js';

const Demo = () => {
  return (
    <List>
      <ListItem divider>
        <ListItemAvatar>
          <Avatar>H</Avatar>
        </ListItemAvatar>
        Avatar
      </ListItem>
      <ListItem divider>
        <ListItemIcon>
          <Search></Search>
        </ListItemIcon>
        Icon
      </ListItem>
      <ListItem button divider>
        button
      </ListItem>
    </List>
  );
};

export default Demo;
