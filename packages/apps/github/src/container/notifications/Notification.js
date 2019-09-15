import React from 'react';
import { Box, Toolbar, IconButton, Typography, useTheme } from '@iot/components';
import { ArrowBack } from '@iot/components/src/icon';
import Tabs from './Tabs';

const Notification = ({ history }) => {
  const theme = useTheme();

  const handleBack = React.useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Box display="flex" width="100vw" height="100vh" flexDirection="column" overflow="hidden">
      <Box bgcolor={theme.palette.primary.main} color="#fff">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleBack}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6">Notifications</Typography>
        </Toolbar>
      </Box>
      <Tabs />
    </Box>
  );
};

export default Notification;
