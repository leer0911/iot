import React from 'react';
import { Typography, Box, Paper, Avatar } from '@iot/components';
import { event } from '../../api';
import { useUserInfo } from '../../store';
import * as moment from 'moment';

const Activity = () => {
  const { login: username = '' } = useUserInfo();
  const [activitys, setActivitys] = React.useState([]);

  React.useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const res = await event.fetch(username);
        setActivitys(res);
      } catch (error) {
        console.error(error);
      }
    };
    if (username !== '') {
      fetchData();
    }
  }, [username]);

  return activitys.map(item => {
    const avatar = item.actor.avatar_url;
    const name = item.actor.login;
    const time = moment(item.created_at)
      .startOf('hour')
      .fromNow();
    const action = item.type.replace('Event', '');
    const repoName = item.repo.name;

    return (
      <Box pb={1} key={item.id}>
        <Paper>
          <Box p={1}>
            <Box display="flex">
              <Avatar src={avatar} />
              <Box pl={2} />
              <Box display="flex" alignItems="center" flex="1">
                <Typography color="primary">{name}</Typography>
              </Box>
              <Box alignContent="flex-start">
                <Typography variant="caption" color="textSecondary">
                  {time}
                </Typography>
              </Box>
            </Box>
            <Box display="flex" pt={1}>
              <Typography color="textSecondary">{action}</Typography>
              <Box pl={1} />
              <Typography color="textPrimary">{repoName}</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    );
  });
};

export default Activity;
