import React from 'react';
import { AppBar, Toolbar, IconButton, Box } from '@iot/components';
import { ArrowBack } from '@iot/components/src/icon';

const Profile = ({ history }) => {
  const handleBack = React.useCallback(() => {
    history.goBack();
  }, [history]);
  return (
    <Box bgcolor="#000" width="100vw" height="100vh">
      <AppBar>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleBack}>
            <ArrowBack />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Profile;
