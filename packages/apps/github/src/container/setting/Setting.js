import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Divider,
  Modal,
  Fade,
  Paper,
  Radio,
  Typography,
} from '@iot/components';
import { ArrowBack, SystemUpdate } from '@iot/components/src/icon';
import { useThemeAction } from '../../store';
import { THEME } from '../../utils';

const Setting = ({ history }) => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState('');
  const { setTheme } = useThemeAction();

  const handleBack = React.useCallback(() => {
    history.goBack();
  }, [history]);

  const handleRadioChange = React.useCallback(
    event => {
      setSelected(event.target.value);
      setOpen(false);
      setTheme(event.target.value);
    },
    [setTheme],
  );

  return (
    <Box width="100vw" height="100vh" display="flex" flexDirection="column">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleBack}>
            <ArrowBack />
          </IconButton>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem
          onClick={() => {
            setOpen(true);
          }}
        >
          <ListItemIcon>
            <SystemUpdate />
          </ListItemIcon>
          <ListItemText>Choose Theme</ListItemText>
        </ListItem>
        <Divider />
      </List>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Fade in={open}>
          <Box p={2}>
            <Paper square>
              <Box pt={2} />
              <ListSubheader>
                <Typography variant="h6">Choose Theme</Typography>
              </ListSubheader>
              <List>
                {THEME.map(item => (
                  <ListItem key={item}>
                    <Radio checked={selected === item} onChange={handleRadioChange} value={item} />
                    <ListItemText>{item}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Setting;
