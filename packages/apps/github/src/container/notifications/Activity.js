import React from 'react';
import { Typography, Box, Paper } from '@iot/components';
import { event } from '../../api';
import { useUserInfo } from '../../store';
import * as moment from 'moment';

const Activity = () => {
  const { login: username = '' } = useUserInfo();
  const [activitys, setActivitys] = React.useState([]);

  React.useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const res = await event.fetchNotifications({ all: true });
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
    const title = item.subject.title;
    const time = moment(item.updated_at)
      .startOf('hour')
      .fromNow();

    return (
      <Box pb={1} key={item.id}>
        <Paper>
          <Box p={1}>
            <Typography>{title}</Typography>
            <Typography variant="caption" color="textSecondary">
              {time}
            </Typography>
          </Box>
        </Paper>
      </Box>
    );
  });
};

export default Activity;
