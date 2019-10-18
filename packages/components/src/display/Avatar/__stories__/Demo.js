import React from 'react';
import { Avatar, Box, useClasses } from '../../../';
import { deepOrange, deepPurple } from '../../../colors';
import Search from '../../../icon/Search';

const styles = {
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
};

const Demo = () => {
  const classes = useClasses(styles);

  return (
    <Box p={2}>
      <h3>图片头像</h3>
      <Box bgcolor="#f5f5f5" p={2} display="flex" alignItems="center">
        <Avatar
          src="https://material-ui.com/static/images/avatar/1.jpg"
          className={classes.avatar}
        />
        <Avatar
          src="https://material-ui.com/static/images/avatar/1.jpg"
          className={classes.bigAvatar}
        />
      </Box>

      <h3>字母头像</h3>
      <Box bgcolor="#f5f5f5" p={2} display="flex" alignItems="center">
        <Avatar className={classes.avatar}>H</Avatar>
        <Avatar className={classes.orangeAvatar}>N</Avatar>
        <Avatar className={classes.purpleAvatar}>OP</Avatar>
      </Box>

      <h3>图标头像</h3>
      <Box bgcolor="#f5f5f5" p={2} display="flex" alignItems="center">
        <Avatar className={classes.avatar}>
          <Search />
        </Avatar>
        <Avatar className={classes.orangeAvatar}>
          <Search />
        </Avatar>
        <Avatar className={classes.purpleAvatar}>
          <Search />
        </Avatar>
      </Box>
    </Box>
  );
};

export default Demo;
