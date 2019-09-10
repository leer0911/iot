import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@iot/components';
import Menu from '@iot/components/src/icon/Menu';
import News from './News';

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <Menu />
          </IconButton>
          <Typography variant="h6">News</Typography>
        </Toolbar>
      </AppBar>
      <Box flex="1" overflow="auto" bgcolor="#efefef" p={2}>
        <News />
      </Box>
    </Box>
  );
};

export default Home;
