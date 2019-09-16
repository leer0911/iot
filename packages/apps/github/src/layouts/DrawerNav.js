import React from 'react';
import { withRouter } from 'react-router-dom';
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
import { useUserInfo } from '../store';

const navs = [
  { title: 'Profile', icon: 'Person', link: 'profile' },
  { title: 'notifications', icon: 'Notifications', link: 'notifications' },
  { title: 'News', icon: 'Send', link: 'news' },
  { title: 'Issues', icon: 'ErrorOutline', link: 'issues' },
  { title: 'Divider', key: 'Divider1' },
  { title: 'My repos', icon: 'Work', link: 'repos' },
  { title: 'Starred repos', icon: 'Favorite', link: 'starred' },
  { title: 'Bookmarks', icon: 'Folder', link: 'bookmarks' },
  { title: 'Divider', key: 'Divider2' },
  { title: 'Search', icon: 'Search', link: 'search' },
  { title: 'Trace', icon: 'Map', link: 'trace' },
  { title: 'Trending repos', icon: 'Room', link: 'trending' },
  { title: 'Repo collections', icon: 'FolderSpecial', link: 'collections' },
  { title: 'Featured topics', icon: 'Sms', link: 'topics' },
  { title: 'Divider', key: 'Divider3' },
  { title: 'Settings', icon: 'Settings', link: 'setting' },
  { title: 'About', icon: 'Help', link: 'about' },
];

const DrawerNav = ({ history }) => {
  const { avatar_url, name, created_at } = useUserInfo();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleDirect = React.useCallback(
    link => () => {
      setOpen(!open);
      history.push(link);
    },
    [history, open],
  );

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
              {navs.map(({ title, icon, link, key }) => {
                if (title === 'Divider') {
                  return <Divider key={key} />;
                }
                const Component = icons[icon];
                return (
                  <ListItem button key={title} onClick={handleDirect(link)}>
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

export default withRouter(DrawerNav);
