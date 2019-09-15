import React from 'react';
import { Typography, Box, Paper, Avatar } from '@iot/components';
import { repo } from '../../api';
import { useUserInfo } from '../../store';

const Starred = () => {
  const { login: username = '' } = useUserInfo();
  const [starreds, setStarreds] = React.useState([]);

  React.useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const res = await repo.fetchStarred(username);
        setStarreds(res);
      } catch (error) {
        console.error(error);
      }
    };
    if (username !== '') {
      fetchData();
    }
  }, [username]);

  return starreds.map((item = {}) => {
    const { name = '', owner = {}, id, description, watchers, forks, language } = item;
    const avatar = owner.avatar_url;
    const ownerName = owner.login;

    return (
      <Box pb={1} key={id}>
        <Paper>
          <Box p={1}>
            <Box display="flex">
              <Avatar src={avatar} />
              <Box pl={2} display="flex" flexDirection="column" flex="1">
                <Box display="flex" justifyContent="space-between">
                  <Typography color="primary">{name}</Typography>
                  <Typography variant="caption">{language}</Typography>
                </Box>
                <Box pt={1} />
                <Typography variant="subtitle2">{description}</Typography>
                <Box pt={1} />
                <Box display="flex">
                  <Typography variant="caption">start: {watchers}</Typography>
                  <Box pl={2} />
                  <Typography variant="caption">forks: {forks}</Typography>
                  <Box pl={2} />
                  <Typography variant="caption">owner: {ownerName}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    );
  });
};

export default Starred;
