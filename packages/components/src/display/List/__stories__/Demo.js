import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '../../../';
import Search from '../../../icon/Search.js';

const Demo = () => {
  return (
    <Box>
      <h3>基础用法</h3>
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
        <ListItem divider>
          <ListItemText primary="primary text" secondary="secondary text" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Demo;
