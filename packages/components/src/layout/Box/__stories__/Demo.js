import React from 'react';
import { Box, Typography } from '../../../';

const Demo = props => {
  return (
    <Box p={2}>
      <Typography variant="h6">border</Typography>
      <Box border={1} p={1} mb={1}></Box>
      <Box borderTop={1} p={1} mb={1}></Box>
      <Box borderBottom={1} p={1} mb={1}></Box>
      <Box borderLeft={1} p={1} mb={1}></Box>
      <Box borderRight={1} p={1} mb={1}></Box>
      <Box border={1} p={1} borderColor="blue" mb={1}></Box>
      <Box border={1} p={1} borderRadius={5}></Box>

      <Box mb={2}></Box>
      <Typography variant="h6">display & flexbox</Typography>
      <Box display="flex" justifyContent="space-between">
        <Box bgcolor="#333" p={1}></Box>
        <Box bgcolor="#333" p={1}></Box>
        <Box bgcolor="#333" p={1}></Box>
      </Box>
    </Box>
  );
};

export default Demo;
