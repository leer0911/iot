import React from 'react';
import { CircularProgress, Box } from '../../../';
import Knobs from './Knobs.js';

const Demo = () => {
  return (
    <Box p={1}>
      <Knobs></Knobs>

      <h3>color</h3>
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default Demo;
