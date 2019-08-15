import React from 'react';
import { Box, Typography } from '../../..';

const demo = () => {
  return (
    <Box p={2}>
      <Typography variant="h1" component="h2" gutterBottom>
        h1.
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2.
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3.
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4.
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5.
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1.
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2.
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
    </Box>
  );
};

export default demo;
