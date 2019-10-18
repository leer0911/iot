import React from 'react';
import {
  Badge,
  Button,
  Box,
  IconButton,
  useClasses,
  Typography,
} from '../../../';
import Knobs from './Knobs.js';
import { Mail as MailIcon } from '../../../icon';

const styles = theme => ({
  margin: {
    margin: theme.spacing(2),
  },
  padding: {
    padding: theme.spacing(0, 2),
  },
});

const Demo = () => {
  const classes = useClasses(styles);

  return (
    <Box p={1}>
      <Knobs />

      <h3>简单的徽章</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <Badge className={classes.margin} badgeContent={4}>
          <MailIcon />
        </Badge>
        <Badge className={classes.margin} badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
        <Badge className={classes.margin} badgeContent={10} color="secondary">
          <MailIcon />
        </Badge>
      </Box>

      <Box p={1} />
      <Box bgcolor="#f5f5f5" p={2}>
        <IconButton className={classes.margin}>
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
        </IconButton>
        <Box p={1} />
        <Badge color="primary" badgeContent={4}>
          <Button variant="contained">primary</Button>
        </Badge>
      </Box>
    </Box>
  );
};

export default Demo;
