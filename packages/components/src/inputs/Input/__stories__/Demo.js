import React from 'react';
import { Input, Box } from '../../..';
import Knobs from './Knobs';

const Demo = () => {
  return (
    <Box p={2}>
      <Knobs />
      <h3>基本用法</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <Input placeholder="InputBase" />
      </Box>
    </Box>
  );
};

export default Demo;
