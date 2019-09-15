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

      <h3>color</h3>
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
  );
};

export default Demo;
