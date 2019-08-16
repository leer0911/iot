import React from 'react';
import { AppBar, Box, Typography, Toolbar, Button } from '../../../';
import { Menu } from '../../../icon';
import { IconButton } from '../../../inputs';

const Demo = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit">
          <Menu></Menu>
        </IconButton>
        <Box flex="1" justifyContent="center" display="flex">
          <Typography variant="h6">News</Typography>
        </Box>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Demo;
