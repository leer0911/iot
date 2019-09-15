import React from 'react';
import { Tabs, Tab, Paper, Box } from '../../../';
import Knobs from './Knobs.js';

const Demo = () => {
  const [value, setValue] = React.useState(2);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Box p={1}>
      <Knobs />

      <h3>基础用法</h3>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Active" />
          <Tab label="Disabled" disabled />
          <Tab label="Active" />
        </Tabs>
      </Paper>
    </Box>
  );
};

export default Demo;
