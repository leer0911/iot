import React from 'react';
import { Fab, Box } from '../../../';
import { Add } from '../../../icon';
import Knobs from './Knobs';

const Demo = () => {
  return (
    <Box p={1}>
      <Knobs></Knobs>

      <h3>variant</h3>
      <Fab variant="extended">
        <Add />
      </Fab>
      <Fab variant="round">
        <Add />
      </Fab>

      <h3>size</h3>
      <Fab size="small">
        <Add />
      </Fab>
      <Fab size="medium">
        <Add />
      </Fab>
      <Fab size="large">
        <Add />
      </Fab>

      <h3>color</h3>
      <Fab>
        <Add />
      </Fab>
      <Fab color="primary">
        <Add />
      </Fab>
      <Fab color="secondary">
        <Add />
      </Fab>
    </Box>
  );
};

export default Demo;
