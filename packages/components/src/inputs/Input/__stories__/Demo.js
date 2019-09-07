import React from 'react';
import { Input, Box } from '../../..';
import Knobs from './Knobs';

const Demo = () => {
  return (
    <Box p={1}>
      <Knobs />
      <h3>基本用法</h3>
      <Input placeholder="InputBase" />
    </Box>
  );
};

export default Demo;
