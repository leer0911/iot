import React from 'react';
import { Paper, InputBase, Button, Box, Divider, grey, Avatar, useTheme } from '@iot/components';

const Login = props => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      bgcolor={grey[600]}
    >
      <Paper square>
        <Box p={2} display="flex" justifyContent="center" bgcolor={theme.palette.secondary.main}>
          <Avatar sizes="">H</Avatar>
        </Box>
        <Box width="90vw" p={2}>
          <Box pt={4} />
          <InputBase placeholder="Username" />
          <Divider />
          <Box pt={5} />
          <InputBase placeholder="Password" type="Password" />
          <Divider />
          <Box pt={4} display="flex" justifyContent="flex-end">
            <Button variant="contained" color="secondary">
              Login
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
