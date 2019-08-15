import React from 'react';
import { Box, Grid } from '../../../';

const demo = () => {
  const item = (
    <Box height={20} bgcolor="#0ff" p="10px">
      11111
    </Box>
  );
  return (
    <Grid container spacing={1}>
      <Grid item spacing={1} grid={3}>
        {item}
      </Grid>
      <Grid item spacing={1} grid={3}>
        {item}
      </Grid>
      <Grid item spacing={1} grid={3}>
        {item}
      </Grid>
      <Grid item spacing={1} grid={3}>
        {item}
      </Grid>
    </Grid>
  );
};

export default demo;
