import React from 'react';
import { Typography, Box, Paper } from '@iot/components';
import { event } from '../../api';
import { useUserInfo } from '../../store';
import * as moment from 'moment';

const List = ({ params }) => {
  const { login: username = '' } = useUserInfo();
  const [activitys, setActivitys] = React.useState([]);

  React.useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const res = await event.fetchNotifications(params);
        setActivitys(res);
      } catch (error) {
        console.error(error);
      }
    };
    if (username !== '') {
      fetchData();
    }
  }, [params, username]);

  if (activitys.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" pt={5}>
        <Typography color="textSecondary">No new notifications</Typography>
      </Box>
    );
  }

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

export default List;
