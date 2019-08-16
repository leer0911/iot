import React from 'react';
import { Box, Paper, Typography } from '../../../';

const Demo = () => {
  return (
    <Box p={2} bgcolor="#f5f5f5">
      <Paper>
        <Box p={2}>
          <Typography variant="h6">This is a sheet of paper.</Typography>
          <Typography>
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Demo;
