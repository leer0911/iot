import React from 'react';
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  useTheme,
  Avatar,
  Typography,
  Divider,
} from '@iot/components';
import * as moment from 'moment';
import Menu from '@iot/components/src/icon/Menu';
import * as icons from '@iot/components/src/icon';
import { useUserInfo } from '../../store';

const navs = [
  { title: 'Profile', icon: 'Person', link: '' },
  { title: 'Notificationgs', icon: 'Notifications', link: '' },
  { title: 'News', icon: 'Send', link: '' },
  { title: 'Issues', icon: 'ErrorOutline', link: '' },
  { title: 'Divider' },
  { title: 'My repos', icon: 'Work', link: '' },
  { title: 'Starred repos', icon: 'Favorite', link: '' },
  { title: 'Bookmarks', icon: 'Folder', link: '' },
  { title: 'Divider' },
  { title: 'Search', icon: 'Search', link: '' },
  { title: 'Trace', icon: 'Map', link: '' },
  { title: 'Trending repos', icon: 'Room', link: '' },
  { title: 'Repo collections', icon: 'FolderSpecial', link: '' },
  { title: 'Featured topics', icon: 'Sms', link: '' },
  { title: 'Divider' },
  { title: 'Settings', icon: 'Settings', link: '' },
  { title: 'About', icon: 'Help', link: '' },
];

const Home = () => {
  const { avatar_url, name, created_at } = useUserInfo();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
        <Menu />
      </IconButton>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box width="75vw" display="flex" flexDirection="column" overflow="hidden">
          <Box p={2} bgcolor={theme.palette.primary.main}>
            <Avatar src={avatar_url} />
            <Box pt={2} color="#fff">
              <Typography color="inherit">{name}</Typography>
              <Typography color="inherit" variant="caption">{`Joined at ${moment(created_at).format(
                'LL',
              )}`}</Typography>
            </Box>
          </Box>
          <Box flex="1" overflow="auto">
            <List>
              {navs.map(({ title, icon }) => {
                if (title === 'Divider') {
                  return <Divider />;
                }
                const Component = icons[icon];
                return (
                  <ListItem button key={title}>
                    <ListItemIcon>
                      <Component />
                    </ListItemIcon>
                    <ListItemText primary={title} />
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Home;
