import React from 'react';
import { Box, Paper, Grid } from '../../../';

const Demo = () => {
  const item = (
    <Paper height={20} bgcolor="#0ff" p="10px">
      <Box p={1} textAlign="center">
        Item
      </Box>
    </Paper>
  );
  return (
    <Box p={2}>
      <h3>基本用法</h3>
      <Box p={2} bgcolor="#f5f5f5">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            {item}
          </Grid>
          <Grid item xs={3}>
            {item}
          </Grid>
          <Grid item xs={3}>
            {item}
          </Grid>
          <Grid item xs={3}>
            {item}
          </Grid>
          <Grid item xs={3}>
            {item}
          </Grid>
          <Grid item xs={3}>
            {item}
          </Grid>
          <Grid item xs={3}>
            {item}
          </Grid>
          <Grid item xs={3}>
            {item}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Demo;
