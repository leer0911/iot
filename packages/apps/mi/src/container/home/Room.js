import React from 'react';
import {
  Box,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@iot/components';
import { ArrowForwardIos } from '@iot/components/src/icon';

const Room = () => {
  return (
    <Box p={2}>
      <Paper>
        <List>
          <ListItem>
            <ListItemText secondary={<React.Fragment>0个设备</React.Fragment>}>
              ListItemText
            </ListItemText>
            <ListItemSecondaryAction>
              <ArrowForwardIos fontSize="small" color="action" />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Paper>
      <Box mt={2}>
        <Paper>
          <Button fullWidth>房间管理</Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default Room;
