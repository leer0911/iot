import React from 'react';
import { Divider, Box } from '../../../';
import Knobs from './Knobs.js';

const Demo = () => {
  return (
    <Box p={1}>
      <Knobs />
      <h3>基础用法</h3>
      fullwidth
      <Divider />
      <Box p={1} />
      middle
      <Divider variant="middle" />
      <Box p={1} />
      inset
      <Divider variant="inset" />
      <Box p={1} />
      <h3>light</h3>
      <Divider light />
      <h3>absolute</h3>
      <Box position="relative">
        <Divider absolute />
      </Box>
      <Box p={1} />
      <h3>vertical</h3>
      <Box height={100}>
        <Divider orientation="vertical" />
      </Box>
    </Box>
  );
};

export default Demo;
