import React from 'react';
import { Fab, Box, useClasses } from '../../../';
import { Add, Edit } from '../../../icon';
import Knobs from './Knobs';

const styles = theme => ({
  margin: {
    marginRight: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
});

const Demo = () => {
  const classes = useClasses(styles);
  return (
    <Box p={2}>
      <Knobs />

      <h3>round</h3>
      <Box bgcolor="#f5f5f5" p={2} color="#f00">
        <Fab className={classes.margin}>
          <Add />
        </Fab>
        <Fab color="primary" className={classes.margin}>
          <Add />
        </Fab>
        <Fab color="secondary" className={classes.margin}>
          <Add />
        </Fab>
        <Fab color="inherit" className={classes.margin}>
          <Add />
        </Fab>
        <Box p={2} />
        <Fab color="secondary" disabled>
          <Add />
        </Fab>
      </Box>
      <Box p={2} />

      <h3>extended</h3>
      <Box bgcolor="#f5f5f5" p={2} color="#f00">
        <Fab variant="extended" className={classes.margin}>
          <Edit className={classes.extendedIcon} />
          default
        </Fab>
        <Box p={1} />

        <Fab variant="extended" color="primary" className={classes.margin}>
          <Edit className={classes.extendedIcon} />
          primary
        </Fab>
        <Box p={1} />

        <Fab variant="extended" color="secondary" className={classes.margin}>
          <Edit className={classes.extendedIcon} />
          secondary
        </Fab>
        <Box p={1} />

        <Fab variant="extended" color="inherit" className={classes.margin}>
          <Edit className={classes.extendedIcon} />
          inherit
        </Fab>
        <Box p={1} />

        <Fab variant="extended" color="secondary" disabled>
          <Edit className={classes.extendedIcon} />
          secondary
        </Fab>
      </Box>

      <h3>size</h3>
      <Box bgcolor="#f5f5f5" p={2} color="#f00">
        <Fab color="secondary" size="small" className={classes.margin}>
          <Add />
        </Fab>
        <Fab color="secondary" size="medium" className={classes.margin}>
          <Add />
        </Fab>
        <Fab color="secondary" className={classes.margin}>
          <Add />
        </Fab>
        <Box p={2} />

        <Fab
          variant="extended"
          color="primary"
          size="small"
          className={classes.margin}
        >
          <Edit className={classes.extendedIcon} />
          extended
        </Fab>
        <Box pt={1} />

        <Fab
          variant="extended"
          color="primary"
          size="medium"
          className={classes.margin}
        >
          <Edit className={classes.extendedIcon} />
          extended
        </Fab>
        <Box pt={1} />

        <Fab variant="extended" color="primary" className={classes.margin}>
          <Edit className={classes.extendedIcon} />
          extended
        </Fab>
      </Box>
    </Box>
  );
};

export default Demo;
