import React from 'react';
import { TextField, Box } from '../../../';
import Knobs from './Knobs.js';

const Demo = () => {
  return (
    <Box p={2}>
      <Knobs />
      <h3>基本用法</h3>

      <Box bgcolor="#f5f5f5" p={2}>
        <TextField
          label="Label text"
          defaultValue="Default Value"
          helperText="Helper text"
        />
      </Box>

      <h3>outlined</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <TextField
          variant="outlined"
          label="Label text"
          defaultValue="Default Value"
          helperText="Helper text"
          margin="normal"
        />
      </Box>

      <h3>filled</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <TextField
          variant="filled"
          label="Label text"
          helperText="Helper text"
          margin="dense"
          placeholder="filled"
        />
      </Box>

      <h3>多行</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <TextField
          label="Label text"
          helperText="Helper text"
          margin="normal"
          placeholder="multiline"
          multiline
        />
      </Box>
    </Box>
  );
};

export default Demo;
