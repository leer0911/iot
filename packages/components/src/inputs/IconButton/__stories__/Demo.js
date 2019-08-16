import React from 'react';
import { IconButton, Box } from '../../../';
import { Add } from '../../../icon';

const Demo = () => {
  return (
    <Box p={1}>
      <IconButton disabled>
        <Add />
      </IconButton>
      <IconButton edge="start">
        <Add />
      </IconButton>
      <IconButton edge="start" size="small">
        <Add />
      </IconButton>
    </Box>
  );
};

export default Demo;
