import React from 'react';
import { Toolbar, IconButton, Box, Avatar, Typography, useTheme, styled } from '@iot/components';
import { ArrowBack } from '@iot/components/src/icon';
import * as moment from 'moment';
import { useUserInfo } from '../../store';
import Tabs from './Tabs';

const AvatarBg = styled('div', props => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  opacity: '0.1',
  overflow: 'hidden',
  background: `url(${props.url}) no-repeat center/cover`,
}));

const Profile = ({ history }) => {
  const theme = useTheme();
  const userInfo = useUserInfo();
  const { avatar_url: avatar, location, login: username, created_at } = userInfo;

  const handleBack = React.useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Box width="100vw" height="100vh" bgcolor="#e8e8e8" display="flex" flexDirection="column">
      <Box bgcolor={theme.palette.primary.main} color="#fff" position="relative">
        <AvatarBg url={avatar} />
        <Box>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleBack}>
              <ArrowBack />
            </IconButton>
            <Box flex="1" />
          </Toolbar>
        </Box>
        <Box display="flex" p={2}>
          <Avatar src={avatar} style={{ width: 70, height: 70 }} />
          <Box flex="1" ml={1}>
            <Typography variant="h6">{username}</Typography>
            <Typography variant="subtitle2">{location}</Typography>
            <Typography color="inherit" variant="caption">{`Joined at ${moment(created_at).format('LL')}`}</Typography>
          </Box>
        </Box>
      </Box>
      <Tabs />
    </Box>
  );
};

export default Profile;
