import React from 'react';
import { Divider, Box } from '../../../';
import Knobs from './Knobs.js';

const Demo = () => {
  return (
    <Box p={1}>
      <Knobs></Knobs>
      <h3>基础用法</h3>
      fullwidth
      <Divider></Divider>
      <Box p={1}></Box>
      middle
      <Divider variant="middle"></Divider>
      <Box p={1}></Box>
      inset
      <Divider variant="inset"></Divider>
      <Box p={1}></Box>
      <h3>light</h3>
      <Divider light></Divider>
      <h3>absolute</h3>
      <Box position="relative">
        <Divider absolute></Divider>
      </Box>
      <Box p={1}></Box>
      <h3>vertical</h3>
      <Box height={100}>
        <Divider orientation="vertical"></Divider>
      </Box>
    </Box>
  );
};

export default Demo;
