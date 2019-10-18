import React from 'react';
import {
  Divider,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '../../../';
import { Info, Work } from '../../../icon';
import Knobs from './Knobs.js';

const Demo = () => {
  return (
    <Box p={2}>
      <Knobs />

      <h3>列表分割线</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <Box bgcolor="#fff">
          <List component="nav">
            <ListItem button>
              <ListItemText primary="Inbox" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </Box>
      </Box>

      <h3>内嵌分割线</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <Box bgcolor="#fff">
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Work />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Info />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Work />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Demo;
