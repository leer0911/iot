import React from 'react';
import { Drawer, Button, Box, List, ListItem, ListItemText } from '../../..';
import { select, number } from '@storybook/addon-knobs';

const Knobs = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <h3>knobs</h3>
      <Box p={2} bgcolor="#f5f5f5" borderRadius={5}>
        <Button onClick={toggleDrawer}>Open</Button>
        <Drawer
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          variant={select(
            'variant',
            {
              permanent: 'permanent',
              persistent: 'persistent',
              temporary: 'temporary',
            },
            'temporary',
          )}
          anchor={select(
            'anchor',
            {
              left: 'left',
              top: 'top',
              right: 'right',
              bottom: 'bottom',
            },
            'left',
          )}
          elevation={number('elevation', 16)}
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
    </>
  );
};

export default Knobs;
