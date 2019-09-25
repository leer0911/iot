import React from 'react';
import { IconButton, Box, useClasses } from '../../../';
import { ArrowDownward, Delete } from '../../../icon';
import Knobs from './Knobs';

const styles = theme => ({
  margin: {
    marginRight: theme.spacing(1),
  },
});

const Demo = () => {
  const classes = useClasses(styles);

  return (
    <Box p={1}>
      <Knobs />

      <h3>color</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <IconButton className={classes.margin}>
          <Delete />
        </IconButton>
        <IconButton color="primary" className={classes.margin}>
          <Delete />
        </IconButton>
        <IconButton color="secondary" className={classes.margin}>
          <Delete />
        </IconButton>
      </Box>

      <h3>size</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <IconButton className={classes.margin} size="small">
          <ArrowDownward fontSize="inherit" />
        </IconButton>
        <IconButton className={classes.margin}>
          <Delete fontSize="small" />
        </IconButton>
        <IconButton className={classes.margin}>
          <Delete />
        </IconButton>
        <IconButton className={classes.margin}>
          <Delete fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Demo;
