import React from 'react';
import { IconButton, Box } from '../../../';
import { Add } from '../../../icon';
import Knobs from './Knobs';

const Demo = () => {
  return (
    <Box p={1}>
      <Knobs></Knobs>

      <h3>color</h3>
      <IconButton>
        <Add />
      </IconButton>
      <IconButton color="primary">
        <Add />
      </IconButton>
      <IconButton color="secondary">
        <Add />
      </IconButton>

      <h3>edge</h3>
      <IconButton>
        <Add />
      </IconButton>
      <IconButton edge="start">
        <Add />
      </IconButton>
      <IconButton edge="end">
        <Add />
      </IconButton>

      <h3>size</h3>
      <IconButton size="small">
        <Add />
      </IconButton>
      <IconButton>
        <Add />
      </IconButton>
    </Box>
  );
};

export default Demo;
