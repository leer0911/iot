import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Box, CircularProgress } from '@iot/components';
import DrawerNav from './DrawerNav';

const DrawerLayout = ({ title = '', loading = false, children }) => {
  return (
    <Box display="flex" flexDirection="column" height="100vh" width="100vw" overflow="hidden">
      <AppBar position="static">
        <Toolbar>
          <DrawerNav />
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>
      <Box flex="1" overflow="auto" p={2}>
        {loading ? (
          <Box display="flex" justifyContent="center" height="100%" pt={5}>
            <CircularProgress />
          </Box>
        ) : (
          children
        )}
      </Box>
    </Box>
  );
};

DrawerLayout.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default DrawerLayout;
