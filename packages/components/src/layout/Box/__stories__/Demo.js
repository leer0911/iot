import React from 'react';
import { Box, Typography } from '../../../';

const Demo = props => {
  return (
    <Box p={2}>
      <Typography variant="h6">border</Typography>
      <Box border={1} p={1} mb={1} />
      <Box borderTop={1} p={1} mb={1} />
      <Box borderBottom={1} p={1} mb={1} />
      <Box borderLeft={1} p={1} mb={1} />
      <Box borderRight={1} p={1} mb={1} />
      <Box border={1} p={1} borderColor="blue" mb={1} />
      <Box border={1} p={1} borderRadius={5} />

      <Box mb={2} />
      <Typography variant="h6">display & flexbox</Typography>
      <Box display="flex" justifyContent="space-between">
        <Box bgcolor="#333" p={1} />
        <Box bgcolor="#333" p={1} />
        <Box bgcolor="#333" p={1} />
      </Box>
    </Box>
  );
};

export default Demo;
