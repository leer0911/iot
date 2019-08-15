import React from 'react';
import { Button, Box, Grid } from '../../../';

const demo = props => {
  return (
    <Box p={1}>
      <h3>text</h3>
      <Grid container>
        <Grid item spacing={1} grid={4}>
          <Button>text</Button>
        </Grid>
        <Grid item spacing={1} grid={4}>
          <Button color="primary">Primary</Button>
        </Grid>
        <Grid item spacing={1} grid={4}>
          <Button color="secondary">Secondary</Button>
        </Grid>
      </Grid>

      <h3>outlined</h3>
      <Grid container>
        <Grid item spacing={1} grid={4}>
          <Button variant="outlined">outlined</Button>
        </Grid>
        <Grid item spacing={1} grid={4}>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
        </Grid>
        <Grid item spacing={1} grid={4}>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
        </Grid>
      </Grid>

      <h3>contained</h3>
      <Grid container>
        <Grid item spacing={1} grid={4}>
          <Button variant="contained">contained</Button>
        </Grid>
        <Grid item spacing={1} grid={4}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </Grid>
        <Grid item spacing={1} grid={4}>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default demo;
