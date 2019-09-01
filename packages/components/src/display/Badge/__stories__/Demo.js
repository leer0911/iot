import React from 'react';
import { Badge, Button, Box } from '../../../';
import Knobs from './Knobs.js';

const Demo = () => {
  return (
    <Box p={1}>
      <Knobs></Knobs>

      <h3>color</h3>
      <Badge badgeContent={4}>
        <Button variant="contained">Button</Button>
      </Badge>
      <Box p={1}></Box>
      <Badge color="primary" badgeContent={4}>
        <Button variant="contained">primary</Button>
      </Badge>
      <Box p={1}></Box>
      <Badge color="secondary" badgeContent={4}>
        <Button variant="contained">secondary</Button>
      </Badge>
      <Box p={1}></Box>
      <Badge color="error" badgeContent={4}>
        <Button variant="contained">error</Button>
      </Badge>
    </Box>
  );
};

export default Demo;
