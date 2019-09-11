import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Box } from '@iot/components';
import DrawerNav from './DrawerNav';

const DrawerLayout = ({ title, children }) => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <AppBar position="static">
        <Toolbar>
          <DrawerNav />
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>
      <Box flex="1" overflow="auto" bgcolor="#efefef" p={2}>
        {children}
      </Box>
    </Box>
  );
};

DrawerLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DrawerLayout;
