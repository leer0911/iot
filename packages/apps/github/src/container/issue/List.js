import React from 'react';
import { Typography, Box, Paper } from '@iot/components';
import { issue } from '../../api';
import { useUserInfo } from '../../store';
import * as moment from 'moment';

const Activity = ({ params }) => {
  const { login: username = '' } = useUserInfo();
  const [activitys, setActivitys] = React.useState([]);

  React.useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const res = await issue.fetch(params);
        setActivitys(res);
      } catch (error) {
        console.error(error);
      }
    };
    if (username !== '') {
      fetchData();
    }
  }, [params, username]);

  return activitys.map(item => {
    const title = item.title;
    const time = moment(item.updated_at)
      .startOf('hour')
      .fromNow();
    const repoName = item.repository.full_name;
    const name = item.user.login;

    return (
      <Box pb={1} key={item.id}>
        <Paper>
          <Box p={1} position="relative">
            <Typography variant="subtitle1" color="primary">
              {name}
            </Typography>
            <Typography variant="subtitle2">{title}</Typography>
            <Box position="absolute" right={8} top={8}>
              <Typography variant="caption" color="textSecondary">
                {time}
              </Typography>
            </Box>
            <Typography variant="caption" color="textSecondary">
              {repoName}
            </Typography>
          </Box>
        </Paper>
      </Box>
    );
  });
};

export default Activity;
