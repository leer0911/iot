import React, { useCallback } from 'react';
import {
  Paper,
  TextField,
  Button,
  Box,
  grey,
  useTheme,
  InputAdornment,
  IconButton,
  CircularProgress,
} from '@iot/components';
import { Visibility, VisibilityOff } from '@iot/components/src/icon';
import axios from 'axios';

const Login = () => {
  const theme = useTheme();
  const [state, setState] = React.useState({
    username: '',
    password: '',
    showPassword: false,
    submitting: false,
  });

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleUsernameChange = useCallback(
    e => {
      setState({ ...state, username: e.target.value });
    },
    [state],
  );

  const handlePasswordChange = useCallback(
    e => {
      setState({ ...state, password: e.target.value });
    },
    [state],
  );

  const handleLogin = useCallback(() => {
    setState({ ...state, submitting: true });
    axios({
      method: 'get',
      url: 'https://api.github.com/',
      auth: {
        username: state.username,
        password: state.password,
      },
    }).then(result => {
      setState({ ...state, submitting: false });
    });
  }, [state]);

  return (
    <Box
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      bgcolor={grey.A400}
    >
      <Paper square>
        <Box p={3} display="flex" justifyContent="center" bgcolor={theme.palette.primary.main} />
        <Box width="80vw" p={2}>
          <Box p={1}>
            <TextField label="Username" onChange={handleUsernameChange} fullWidth />
            <Box pt={2} />
            <TextField
              label="Password"
              type={state.showPassword ? 'type' : 'password'}
              onChange={handlePasswordChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton color="primary" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                      {state.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
          </Box>

          <Box pt={4} pb={2} display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              disabled={!state.username || !state.password || state.submitting}
              fullWidth
            >
              {state.submitting ? <CircularProgress size={20} /> : 'Login'}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
