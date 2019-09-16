import React from 'react';
import { Typography, Box } from '@iot/components';
import { Work, Mail } from '@iot/components/src/icon';
import { useUserInfo } from '../../store';

const Info = () => {
  const userInfo = useUserInfo();
  const { name, company, email, followers, following, public_repos, public_gists } = userInfo;
  return (
    <>
      <Typography>{name}</Typography>
      <Box pt={2} />
      <Box display="flex">
        <Work />
        <Box pl={2} />
        <Typography>{company}</Typography>
      </Box>
      <Box pt={2} />
      <Box display="flex">
        <Mail />
        <Box pl={2} />
        <Typography color="primary">{email}</Typography>
      </Box>
      <Box pt={2} />
      <Box display="flex" justifyContent="space-bettween">
        <Box display="flex" flex="1" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography>{followers}</Typography>
          <Typography variant="caption" color="textSecondary">
            Followers
          </Typography>
        </Box>
        <Box pl={2} />

        <Box display="flex" flex="1" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography>{following}</Typography>
          <Typography variant="caption" color="textSecondary">
            Following
          </Typography>
        </Box>
        <Box pl={2} />

        <Box display="flex" flex="1" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography>{public_repos}</Typography>
          <Typography variant="caption" color="textSecondary">
            Repositories
          </Typography>
        </Box>
        <Box pl={2} />

        <Box display="flex" flex="1" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography>{public_gists}</Typography>
          <Typography variant="caption" color="textSecondary">
            gists
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Info;
