import React from 'react';
import { TextField, Box } from '../../../';
import Knobs from './Knobs.js';

const Demo = () => {
  return (
    <Box p={1}>
      <Knobs />
      <h3>基本用法</h3>
      <TextField
        id="standard-helperText"
        label="Label text"
        defaultValue="Default Value"
        helperText="Helper text"
      />

      <h3>outlined</h3>
      <TextField
        variant="outlined"
        id="standard-helperText"
        label="Label text"
        defaultValue="Default Value"
        helperText="Helper text"
        margin="normal"
      />

      <h3>filled</h3>
      <TextField
        variant="filled"
        id="standard-helperText"
        label="Label text"
        helperText="Helper text"
        margin="dense"
        placeholder="filled"
        hiddenLabel
      />

      <h3>多行</h3>
      <TextField
        id="standard-helperText"
        label="Label text"
        helperText="Helper text"
        margin="normal"
        placeholder="multiline"
        multiline
      />
    </Box>
  );
};

export default Demo;
