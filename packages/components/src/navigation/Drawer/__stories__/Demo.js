import React from 'react';
import { Button, Drawer, Box, List, ListItem, ListItemText } from '../../../';
import Knobs from './Knobs.js';

const Demo = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box p={1}>
      <Knobs />

      <h3>基础用法</h3>
      <Button onClick={toggleDrawer}>Open</Button>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map(text => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Demo;
