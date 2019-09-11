import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@iot/components';
import Sidebar from './Sidebar';
import News from './News';

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <AppBar position="static">
        <Toolbar>
          <Sidebar />
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
