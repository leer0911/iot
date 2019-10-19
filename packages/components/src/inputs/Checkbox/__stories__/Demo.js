import React from 'react';
import { Checkbox, Box } from '../../../';
import Knobs from './Knobs.js';

const Demo = () => {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event, checked) => {
    setSelectedValue(checked);
  };

  return (
    <Box p={1}>
      <Knobs />

      <h3>基础用法</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <Checkbox
          color="default"
          checked={selectedValue === 'a'}
          onChange={handleChange}
        />
        <Checkbox
          color="primary"
          checked={selectedValue === 'a'}
          onChange={handleChange}
        />
        <Checkbox checked={selectedValue === 'a'} onChange={handleChange} />
      </Box>
    </Box>
  );
};

export default Demo;
