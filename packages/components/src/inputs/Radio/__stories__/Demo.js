import React from 'react';
import { Radio, Box } from '../../../';
import Knobs from './Knobs.js';

const Demo = () => {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box p={1}>
      <Knobs />

      <h3>基础用法</h3>
      <Box bgcolor="#f5f5f5" p={2}>
        <Radio
          color="default"
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
        />
        <Radio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
        />
        <Radio
          color="primary"
          checked={selectedValue === 'c'}
          onChange={handleChange}
          value="c"
        />
      </Box>
    </Box>
  );
};

export default Demo;
