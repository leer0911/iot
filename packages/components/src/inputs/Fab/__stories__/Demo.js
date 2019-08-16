import React from 'react';
import { Fab, Box } from '../../../';
import { Add } from '../../../icon';

const Demo = () => {
  return (
    <Box p={1}>
      <Fab variant="extended" color="primary">
        <Add size="large" />
      </Fab>
      <Fab variant="round">
        <Add />
      </Fab>
      <Fab size="small">
        <Add />
      </Fab>
    </Box>
  );
};

export default Demo;
