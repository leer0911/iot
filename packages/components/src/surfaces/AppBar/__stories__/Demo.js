import React from 'react';
import { AppBar, Box, Typography, Toolbar, Button } from '../../../';

const Demo = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box flex="1">
          <Typography variant="h6">News</Typography>
        </Box>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Demo;
