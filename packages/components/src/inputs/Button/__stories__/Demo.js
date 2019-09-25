import React from 'react';
import { Button, Box, useClasses } from '../../../';
import Knobs from './Knobs';

import { Delete, Save, SystemUpdate } from '../../../icon';

const styles = theme => ({
  margin: {
    margin: theme.spacing(0.5),
  },
  extendedIcon: {
    marginLeft: theme.spacing(1),
  },
});

const Demo = () => {
  const classes = useClasses(styles);
  return (
    <Box p={2}>
      <Knobs />

      <h3>text 文本按钮</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <Button>default</Button>
        <Box p={1} />

        <Button color="primary">Primary</Button>
        <Box p={1} />

        <Button color="secondary">Secondary</Button>
        <Box p={1} />

        <Button color="secondary" disabled>
          disabled
        </Button>
      </Box>

      <h3>outlined 描边按钮</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <Button variant="outlined">default</Button>
        <Box p={1} />

        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Box p={1} />

        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Box p={1} />

        <Button variant="outlined" disabled>
          disabled
        </Button>
      </Box>

      <h3>contained 实心按钮</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <Button variant="contained">default</Button>
        <Box p={1} />

        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Box p={1} />

        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Box p={1} />

        <Button variant="contained" disabled>
          disabled
        </Button>
      </Box>

      <h3>size 尺寸</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <Box pb={2}>
          <Button color="primary" size="small" className={classes.margin}>
            small
          </Button>
          <Button color="primary" size="medium" className={classes.margin}>
            medium
          </Button>
          <Button color="primary" size="large" className={classes.margin}>
            large
          </Button>
        </Box>

        <Box pb={2}>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            className={classes.margin}
          >
            small
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="medium"
            className={classes.margin}
          >
            medium
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            className={classes.margin}
          >
            large
          </Button>
        </Box>

        <Box pb={2}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.margin}
          >
            small
          </Button>

          <Button
            variant="contained"
            color="primary"
            size="medium"
            className={classes.margin}
          >
            medium
          </Button>

          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.margin}
          >
            large
          </Button>
        </Box>
      </Box>

      <h3>带图标和标签</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <Button variant="contained">
          default
          <SystemUpdate className={classes.extendedIcon} />
        </Button>
        <Box p={1} />

        <Button variant="contained" color="primary">
          primary
          <Save className={classes.extendedIcon} />
        </Button>
        <Box p={1} />

        <Button variant="contained" color="secondary">
          secondary
          <Delete className={classes.extendedIcon} />
        </Button>
      </Box>
    </Box>
  );
};

export default Demo;
